import { ObjectID } from "bson";
import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const {
    query: { enderecoId }
  } = req;

  const collection = await getCollection("enderecos");
  console.log(collection);

  const [endereco] = await collection
    .find({ _id: ObjectID(enderecoId) })
    .toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ endereco });
};
