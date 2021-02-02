const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  MONGODB_URL: process.env.MONGODB_URL,
  API_KEY: process.env.API_KEY,
  STRIPE_PK: process.env.STRIPE_PK,
  STRIPE_SK: process.env.STRIPE_SK,
  // JWT_SECRET: process.env.JWT_SECRET,
  // PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};
