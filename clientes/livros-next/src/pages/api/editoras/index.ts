import { ControleEditora } from "./../../../../classes/controle/ControleEditora";
import type { NextApiRequest, NextApiResponse } from "next";

export const controleEditora = new ControleEditora();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const editoras = controleEditora.getEditoras();
      res.status(200).json(editoras);
    } else {
      res.status(405).json({ message: "Método não permitido" });
    }
  } catch (e) {
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};
