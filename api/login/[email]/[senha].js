import { getCollection } from "../../../lib/db";

module.exports = async (req, res) => {
    const {
        query: { email, senha }
    } = req;
    
    const collection = await getCollection("usuarios");
    const [user] = await collection.find({ email: email, senha: senha }).toArray();

    res.setHeader("Cache-Control", "maxage=0, s-maxage=600");
    res.status(200).json({ user });
};
