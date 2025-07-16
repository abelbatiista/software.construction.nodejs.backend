require('dotenv').config();

const ENV = {
  app: {
    name: process.env.APP_NAME || 'Software Construction',
    description: process.env.APP_DESCRIPTION || 'App for Software Construction',
    port: +process.env.APP_PORT || 3000,
  },
  database: {
    uri: process.env.DATABASE_URI || '',
  },
  google: {
    email: process.env.GOOGLE_EMAIL || '',
    pass: process.env.GOOGLE_PASS || '',
  },
};

module.exports = ENV;
