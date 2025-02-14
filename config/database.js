import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true); // strictQuery ensure only fields are specified, will be saved to the database

  // If the database is already connected, don't connected again
  if (connected) {
    console.log('MongoDb is alreay coneected.');
  }

  // Conneted To MonogDb
  try {
    await mongoose.connect(process.env.MONGODB_URI); // connect methods asynchronous
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
