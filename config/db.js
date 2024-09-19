const mongoose = require('mongoose');
require('dotenv').config(); // Ensure you have dotenv installed and this line is at the top

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI; // Ensure you have MONGODB_URI in your .env file
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
