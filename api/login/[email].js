import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const {
    query: { email }
  } = req;

  const collection = await getCollection("usuarios");
  const [user] = await collection.find({ email: email }).toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ user });
};
