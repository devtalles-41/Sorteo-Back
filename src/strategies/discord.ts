const passport = require('passport');
const {Strategy} = require('passport-discord');
import {envs} from "../config/envs";
const User = require("../models/User.ts");


passport.serializeUser((user:any, done:any) => {
	done(null, user.id);
});

passport.deserializeUser(async (id:any, done:any) => {
	try {
		const findUser = await User.findById(id);
		return findUser ? done(null, findUser) : done(null, null);
	} catch (err) {
		done(err, null);
	}
});

passport.use(new Strategy({
    clientID: envs.discord_id,
	clientSecret: envs.discord_secret,
	callbackURL: envs.discord_callback,
    scope: ["identify"],
},async(accessToken:any,refreshToken:any, profile:any, done:any)=>{
    console.log(accessToken,refreshToken,profile,done);

    let findedUser;
    try{
        findedUser =  await User.findOne({discordId: profile.id});
    }catch(err){
        console.log(err);
        return done(err,null);
    }

    try{
        if(!findedUser){
            const newUser= new User({
                discordId: profile.id,
                username: profile.username,
                access_token: accessToken
            });
            const newSavedUser = await newUser.save();
            return done(null,newSavedUser);
        }
        return done(null,findedUser);

    }catch(err){
        return done(err,null);
    }
    

}))