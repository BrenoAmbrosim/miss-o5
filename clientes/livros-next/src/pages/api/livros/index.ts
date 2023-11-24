

import type { NextApiRequest, NextApiResponse } from "next";
import ControleLivros from "../../../../classes/controle/ControleLivros";

export const controleLivro = new ControleLivros();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const livros = await controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === "POST") {
      const livro = req.body;
      await controleLivro.incluir(livro);
      res.status(200).json({ message: "Livro adicionado com sucesso!" });
    } else {
      res.status(405).json({ message: "Método não permitido" });
    }
  } catch (e) {
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};
