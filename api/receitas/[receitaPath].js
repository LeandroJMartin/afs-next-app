import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const {
    query: { receitaPath }
  } = req;

  const collection = await getCollection("receitas");

  const [receita] = await collection.find({ path: receitaPath }).toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ receita: { receita } });
};
