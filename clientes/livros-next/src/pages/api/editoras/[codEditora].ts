import { NextApiRequest, NextApiResponse } from "next";
import { ControleEditora } from "../../../../classes/controle/ControleEditora";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codEditora } = req.query as { codEditora: string };
  try {
    const controleEditora = new ControleEditora();
    const editora = controleEditora.getEditora(Number(codEditora));
    if (editora) {
      res.status(200).json(editora);
    } else {
      res.status(404).json({ message: "Editora não encontrada" });
    }
  } catch (e: any) {
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};
