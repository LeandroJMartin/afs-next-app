import { getCollection } from '../../lib/db';

module.exports = async (req, res) => {
  const collection = await getCollection('posts');
  const {
    query: { limit },
  } = req;

  const posts = await collection
    .find(
      {},
      {
        projection: {
          titulo: 1,
          path: 1,
          thumbs: 1,
          tags: 1,
          date: 1,
        },
      },
    )
    .sort({ date: -1 })
    .limit(parseInt(limit, 10) || 0)
    .toArray();

  res.status(200).json({ posts });
};
