import { getCollection } from '../../lib/db';

module.exports = async (req, res) => {
  const collection = await getCollection('lojas');
  const {
    query: { uf },
  } = req;

  const lojas = await collection
    .find({ 'endereco.uf': uf.toUpperCase() })
    .project({
      path: 1,
      nome: 1,
      link_balcao_online: 1,
      'endereco.cidade': 1,
      'endereco.uf': 1,
    })
    .toArray();

  res.setHeader('Cache-Control', 'maxage=0, s-maxage=600');
  res.status(200).json({ lojas });
};
