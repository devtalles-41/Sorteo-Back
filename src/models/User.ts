import mongoose from 'mongoose';

const UserSchema =  new mongoose.Schema({
    discordId:{
        type: mongoose.SchemaTypes.String,
        required:true
    },
    username:{
        type: mongoose.SchemaTypes.String,
        required: true
    },
    avatar:{
        type: mongoose.SchemaTypes.String,
        required: false
    },
    admin:{
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        default: false
    },
    access_token:{
        type: mongoose.SchemaTypes.String,
        required: false,
        default: null
    },
    createdAt:{
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date()
    }
})

module.exports = mongoose.model('users',UserSchema);