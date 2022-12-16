import { getCollection } from "../../lib/db";

module.exports = async (req, res) => {
  const {
    query: { postPath }
  } = req;

  const collection = await getCollection("posts");

  const [post] = await collection.find({ path: postPath }).toArray();
  // post relacionados
  // por enquanto pega todos
  const postsRelacionados = await collection
    .find(
      {},
      {
        projection: {
          titulo: 1,
          path: 1,
          thumbs: 1,
          tags: 1
        }
      }
    )
    .limit(3)
    .toArray();

  res.status(200).json({ post, postsRelacionados });
};
