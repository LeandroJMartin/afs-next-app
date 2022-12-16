import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const {
    query: { exercicioPath }
  } = req;

  const collection = await getCollection("exercicios");

  const [exercicio] = await collection.find({ path: exercicioPath }).toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ exercicio: { exercicio } });
};
