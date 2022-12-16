import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const collection = await getCollection("ofertas");
  const {
    query: { limit },
  } = req;

  const ofertas = await collection
    .find({})
    .sort({ tipo: 1, "datas.dia_unico": 1, "datas.dia_de": 1 })
    .limit(parseInt(limit, 10) || 0)
    .toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=0");
  res.status(200).json({ ofertas });
};

// { $and: [{ 'datas.de': { $lte: new Date() } }, { 'datas.ate': { $gte: new Date() } }] },
