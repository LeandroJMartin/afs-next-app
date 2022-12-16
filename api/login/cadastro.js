import Joi from "@hapi/joi";
import { getCollection } from "../../lib/db";
// import dispararEmailNovoUsuario from "../../lib/emails/cadastroFornecedorNotificacao";

const fidelidadeJoiSchema = Joi.object({
  nome: Joi.string(),
  email: Joi.string(),
  senha: Joi.string(),
  celular: Joi.string(),
  tipoLogin: Joi.string(),
  token: Joi.string()
});

export default async (req, res) => {
  const { body } = req;

  const {
    error: validationError,
    value: validatedBody
  } = fidelidadeJoiSchema.validate({ ...body });

  if (validationError) return res.status(422).json({ validationError });

  try {
    const collection = await getCollection("usuarios");

    const { insertedId } = await collection.insertOne({
      ...validatedBody,
      date: new Date()
    });

    // await dispararEmailNovoUsuario(body);

    return res.status(200).json({
      insertedId
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
