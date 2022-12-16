import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const {
    query: { notificacoesId }
  } = req;

  const collection = await getCollection("notificacoes");

  const [notificacao] = await collection
    .find({ _id: notificacoesId })
    .toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ notificacao: { notificacao } });
};
