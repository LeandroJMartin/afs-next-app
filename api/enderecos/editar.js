import Joi from "@hapi/joi";
import { getCollection } from "../../lib/db";

const enderecoJoiSchema = Joi.object({
  user_id: Joi.string(),
  nome: Joi.string(),
  pais: Joi.string(), //"BR"
  uf: Joi.string(), //"SP"
  cidade: Joi.string(),
  cep: Joi.string(), //"00000-000"
  bairro: Joi.string(),
  endereco: Joi.string(),
  numero: Joi.string(),
  complemento: Joi.string(),
  referencia: Joi.string(),
  obs: Joi.string(),
});

export default async (req, res) => {
  const { body } = req;

  const {
    error: validationError,
    value: validatedBody
  } = enderecoJoiSchema.validate({ ...body });

  if (validationError) return res.status(422).json({ validationError });

  try {
    const collection = await getCollection("enderecos");

    const { updatedId } = await collection.updateOne(
      { _id: validatedBody._id },
      {
        $set: {
          ...validatedBody,
          date: new Date()
        }
      },
      { upsert: true }
    );

    return res.status(200).json({
      updatedId
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
