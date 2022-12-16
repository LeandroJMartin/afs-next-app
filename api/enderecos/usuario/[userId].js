import { getCollection } from "../../../lib/db";

module.exports = async (req, res) => {
  const {
    query: { userId }
  } = req;

  const collection = await getCollection("enderecos");
  const enderecos = await collection
    .find({ user_id: userId })
    .toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ enderecos });
};
