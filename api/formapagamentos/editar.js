import Joi from "@hapi/joi";
import { getCollection } from "../../lib/db";

const formapagamentoJoiSchema = Joi.object({
  user_id: Joi.string(),
  label: Joi.string(),
  nome: Joi.string(),
  numero: Joi.string(),
  validade_mes: Joi.string(),
  validade_ano: Joi.string(),
  documento: Joi.string(),
});

export default async (req, res) => {
  const { body } = req;

  const {
    error: validationError,
    value: validatedBody
  } = formapagamentoJoiSchema.validate({ ...body });

  if (validationError) return res.status(422).json({ validationError });

  try {
    const collection = await getCollection("formapagamentos");

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
