import mongoose from 'mongoose';
import { envs } from '../config';

export const conectionDatabase = async () => {
  try {
    await mongoose.connect(envs.mongoUri);
    console.log('Database connected');
  } catch (error) {
    console.log('Error in conection database', error);
    throw new Error('Error in conection database');
  }
};
