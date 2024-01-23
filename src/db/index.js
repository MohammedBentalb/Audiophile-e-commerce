import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('connected to mongodb');
  } catch (err) {
    console.log('ERROR FAILED TO CONNECT TO MONGODB', err);
  }
};

export default connectMongo;
