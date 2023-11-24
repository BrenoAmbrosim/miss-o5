import { useState, useEffect } from 'react';
import ControleLivros from '../../classes/controle/ControleLivros';
import { LinhaLivro } from '../../components/LinhaLivro';
import { Menu } from '../../components/Menu';
import Head from 'next/head';
import Livro from '../../classes/modelo/Livro';

const LivroLista = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const controleLivros = new ControleLivros();
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    controleLivros.obterLivros().then((resultado) => {
      setLivros(resultado);
      setCarregado(true);
    });
  }, [controleLivros]);

  const excluir = (codigo: string) => {
    controleLivros.excluir(codigo).then(() => {
      setCarregado(false);
      controleLivros.obterLivros().then((resultado) => {
        setLivros(resultado);
        setCarregado(true);
      });
    });
  };

  return (
    <div>
      <Head>
        <title>Lista de Livros</title>
      </Head>
      <Menu />
      <main>
        <div>
          <h1>Lista de Livros</h1>
          {carregado ? (
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Título</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {livros.map((livro, index) => (
                  <LinhaLivro key={index} livro={livro} excluir={(codigo: number) => excluir(String(codigo))} />
                ))}
              </tbody>
            </table>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default LivroLista;
