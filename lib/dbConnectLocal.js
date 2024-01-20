import mongoose from 'mongoose';

// Replace this URI with the URI for your local MongoDB instance
// const uri = "mongodb://localhost:27017/weather";



const dbConnectLocal = async() => {
  try{
    await mongoose.connect("mongodb://root:password@localhost:27017/weather?authSource=admin",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch(err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}

export default dbConnectLocal;