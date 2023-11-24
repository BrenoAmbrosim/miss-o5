import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from ".";


// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { codigo } = req.query;
  try {
    if (req.method === "DELETE") {
      await controleLivro.excluir(codigo as string);
      res.status(200).json({ message: "Livro excluído com sucesso" });
    } else {
      res.status(405).json({ message: "Método não permitido" });
    }
  } catch (e) {
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

