import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const collection = await getCollection("receitas");
  console.log(collection);

  const receitas = await collection
    .find({})
    .project({
      path: 1,
      titulo: 1,
      minutosPreparo: 1,
      pessoas: 1,
      avaliacao: 1,
      tags: 1,
      "imagens.thumb": 1
    })
    .toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ receitas });
};
