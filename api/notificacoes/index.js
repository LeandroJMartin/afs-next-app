import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const collection = await getCollection("notificacoes");
  console.log(collection);

  const receitas = await collection.find({}).toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ receitas });
};
