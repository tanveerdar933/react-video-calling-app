require('dotenv').config();
const path = require('path');

module.exports = {
  APP_ID: process.env.VIDEO_APP_ID,
  API_KEY: process.env.VIDEO_API_KEY,
  PRIVATE_KEY: process.env.VIDEO_APP_PRIVATE_KEY,
  SERVER_PUBLIC_STATIC: process.env.SERVER_PUBLIC_STATIC,
  PRIVATE_KEY_PATH: path.resolve(__dirname, "./secure/app_private_key.pk"),
};