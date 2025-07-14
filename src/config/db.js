const mongoose = require('mongoose');
const ENV = require('./env');

const initializeDB = async () => {
  try {
    await mongoose.connect(ENV.database.uri);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error to connect MongoDB:', error);
    process.exit(1);
  }
};

module.exports = {
  initializeDB,
};
