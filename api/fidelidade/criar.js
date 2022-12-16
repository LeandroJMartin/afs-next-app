import Joi from "@hapi/joi";
import { getCollection } from "../../lib/db";

const fidelidadeJoiSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().required(),
  celular: Joi.string(),
  url: Joi.string()
});

export default async (req, res) => {
  const { body } = req;

  const {
    error: validationError,
    value: validatedBody
  } = fidelidadeJoiSchema.validate({ ...body });

  if (validationError) return res.status(422).json({ validationError });

  try {
    const collection = await getCollection("leads");

    const { insertedId } = await collection.updateOne(
      { email: validatedBody.email },
      {
        $set: {
          ...validatedBody,
          date: new Date()
        }
      },
      { upsert: true }
    );

    return res.status(200).json({
      insertedId
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
