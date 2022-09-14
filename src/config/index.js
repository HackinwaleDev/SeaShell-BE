const dotenv = require('dotenv');

dotenv.config();

const APP_NAME = 'SEASHELL';

// import configurations from .env file
const {
  NODE_ENV,
  PORT,
} = process.env;
console.log(PORT, NODE_ENV);
module.exports = {
  appName: APP_NAME,
  port: PORT,
  production: NODE_ENV === 'production', // true|false
}
