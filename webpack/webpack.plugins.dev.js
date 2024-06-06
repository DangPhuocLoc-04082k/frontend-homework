const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = [
  new Dotenv({
    path: path.resolve(__dirname, '../', '.env.dev'), // default is .env
  }),
];
