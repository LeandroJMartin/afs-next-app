import { ObjectID } from "bson";
import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const {
    query: { formapagamentoId }
  } = req;

  const collection = await getCollection("formapagamentos");
  console.log(collection);

  const [formapagamento] = await collection
    .find({ _id: ObjectID(formapagamentoId) })
    .toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ formapagamento });
};
