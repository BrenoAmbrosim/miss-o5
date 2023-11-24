const banco = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

const URI = `mongodb+srv://${process.env.DB_USER}:` +
`${process.env.DB_PASSWORD}@${process.env.DB_URI}/?retryWrites=true&w=majority`;

banco.connect(URI, options);

module.exports = banco;
