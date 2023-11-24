const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const URI = `mongodb+srv://${process.env.DB_USER}:` +
`${process.env.DB_PASSWORD}@${process.env.DB_URI}/`;

const dbName = 'livraria';

mongoose.connect(URI + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const livroSchema = new mongoose.Schema({
  codigo: Number,
  codEditora: Number,
  titulo: String,
  resumo: String,
  autores: [String]
});

const Livro = mongoose.model('Livro', livroSchema);

const obterLivros = async () => {
  const livros = await Livro.find();
  return { data: livros };
};

const incluir = async (livro) => {
  const novoLivro = new Livro(livro);
  const resultado = await novoLivro.save();
  return resultado;
};

const excluir = async (codigo) => {
  const resultado = await Livro.deleteOne({ _id: codigo });
  return resultado;
};

module.exports = { Livro, obterLivros, incluir, excluir };
