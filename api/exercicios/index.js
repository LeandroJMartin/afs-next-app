import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const collection = await getCollection("exercicios");
  console.log(collection);

  const exercicios = await collection
    .find({})
    .project({
      path: 1,
      titulo: 1,
      calorias: 1,
      duracao: 1,
      dificuldade: 1,
      tags: 1,
      "imagens.thumb": 1
    })
    .toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ exercicios });
};
