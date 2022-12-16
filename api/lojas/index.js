import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const collection = await getCollection("lojas");
  console.log(collection);
  const {
    query: { somente_online }
  } = req;

  const find = somente_online ? { venda_app: true } : {};

  const lojas = await collection
    .find(find)
    .toArray();

  res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
  res.status(200).json({ lojas });
};

// aggregate interessante:
// .aggregate([
//   {
//     $group: {
//       _id: { uf: '$endereco.uf', cidade: '$endereco.cidade' },
//       // _id: { $concat: ['$endereco.uf', ' - ', '$endereco.cidade'] },
//       lojas: {
//         $push: {
//           nome: '$nome',
//           bairro: '$endereco.bairro',
//           path: '$path',
//         },
//       },
//     },
//   },
// ])
