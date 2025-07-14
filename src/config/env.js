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
};

module.exports = ENV;
