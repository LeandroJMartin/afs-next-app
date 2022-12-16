import { getCollection } from '../../lib/db';

module.exports = async (req, res) => {
  const collection = await getCollection('banners');
  const {
    query: { limit },
  } = req;

  const banners = await collection
    .find({})
    .sort({ prioridade: -1 })
    .limit(parseInt(limit, 10) || 0)
    .toArray();

  res.status(200).json({ banners });
};
