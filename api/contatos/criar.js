import Joi from '@hapi/joi';
import { getCollection } from '../../lib/db';
import dispararEmailNotificacao from '../../lib/emails/contatoNotificacao';

const fidelidadeJoiSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().required(),
  celular: Joi.string(),
  assunto: Joi.string(),
  mensagem: Joi.string(),
  type: Joi.string(),
});

export default async (req, res) => {
  const { body } = req;

  const {
    error: validationError,
    value: validatedBody,
  } = fidelidadeJoiSchema.validate({ ...body });

  if (validationError) return res.status(422).json({ validationError });

  try {
    const collection = await getCollection('contatos');

    const { insertedId } = await collection.insertOne({
      ...validatedBody,
      date: new Date(),
    });

    await dispararEmailNotificacao(body);

    return res.status(200).json({
      insertedId,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
