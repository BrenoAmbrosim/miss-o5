import Editora from '../modelo/Editora';

const editoras: Editora[] = [
  {
    codEditora: 1,
    nome: 'Prentice Hall PTR',
    autor: 'Robert C. Martin',
  },
  {
    codEditora: 2,
    nome: 'Addison-Wesley Professional',
    autor: 'Martin Fowler',
  },
  {
    codEditora: 3,
    nome: 'Alta Books',
    autor: 'Eric Evans',
  },
];

export class ControleEditora {
  public getEditoras = (): Editora[] => {
    return editoras;
  };

  public getNomeEditora = (codEditora: number): string => {
    const editoraEncontrada = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    } else {
      throw new Error('Editora não encontrada');
    }
  };

  public getEditora = (codEditora: number): Editora | undefined => {
    return editoras.find((editora) => editora.codEditora === codEditora);
  };
}
