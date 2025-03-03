require('dotenv').config();

const ENV = {
  app: {
    name: process.env.APP_NAME || 'Web Development Laboratory',
    description: process.env.APP_DESCRIPTION || 'All practices of node.js laboratory',
    port: +process.env.APP_PORT || 9000,
  },
  database: {
    type: process.env.DATABASE_TYPE || '',
    host: process.env.DATABASE_HOST || '',
    name: process.env.DATABASE_NAME || '',
    user: process.env.DATABASE_USER || '',
    password: process.env.DATABASE_PASSWORD || '',
  },
};

module.exports = ENV;
