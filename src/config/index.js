const dotenv = require('dotenv');

dotenv.config();

const APP_NAME = 'SEASHELL';

// import configurations from .env file
const {
  NODE_ENV,
  PORT,
  MONGODB_DEV_URI,
  MONGODB_PROD_URI
} = process.env;

module.exports = {
  appName: APP_NAME,
  port: PORT,
  production: NODE_ENV === 'production', // true|false
  mongodb: {
    connStr: NODE_ENV === 'production'? MONGODB_PROD_URI : MONGODB_DEV_URI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false
    }
  }
}
