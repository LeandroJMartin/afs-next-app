import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const {
    query: { lojaPath }
  } = req;

  const collection = await getCollection("lojas");

  const [loja] = await collection.find({ path: lojaPath }).toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ loja: { ...loja, vendeOnline: true } });
};
