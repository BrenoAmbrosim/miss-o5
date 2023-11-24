import React, { useState, useEffect } from "react";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import './App.css';

const controleLivros = new ControleLivro("http://localhost:3030/livros");
const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
  const { livro, excluir, getNomeEditora } = props;
  const nomeEditora = getNomeEditora;

  return (
    <tr>
      <td>
        <p>{livro.titulo}</p>
        <button type="button" className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora(livro.codEditora)}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

const LivroLista = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
      try {
        const livrosData = await controleLivros.obterLivros();
        setLivros(livrosData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLivros();
  }, []);

  const excluir = async (codigo) => {
    try {
      const excluido = await controleLivros.excluir(codigo);
      if (excluido) {
        const livrosAtualizados = livros.filter((livro) => livro.codigo !== codigo);
        setLivros(livrosAtualizados);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="container">
      <h1>Catálogo de Livros</h1>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map(livro => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              excluir={excluir}
              getNomeEditora={controleEditora.getNomeEditora}
            />
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default LivroLista;


