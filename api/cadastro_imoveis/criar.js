import Joi from '@hapi/joi';
import { getCollection } from '../../lib/db';
import dispararEmailNotificacao from '../../lib/emails/cadastroImoveisNotificacao';

const fidelidadeJoiSchema = Joi.object({
  nome: Joi.string(),
  cep: Joi.string(),
  cidade: Joi.string(),
  uf: Joi.string(),
  endereco: Joi.string(),
  numero: Joi.string(),
  complemento: Joi.string(),
  bairro: Joi.string(),
  terreo: Joi.string(),
  pavimento_um: Joi.string(),
  pavimento_dois: Joi.string(),
  tipo_oferta: Joi.string(),
  condominio: Joi.string(),
  iptu: Joi.string(),
  obs: Joi.string(),
  nome_ofertante: Joi.string(),
  imobiliaria: Joi.string(),
  email: Joi.string(),
  telefone: Joi.string(),
  celular: Joi.string(),
});

export default async (req, res) => {
  const { body } = req;

  const {
    error: validationError,
    value: validatedBody,
  } = fidelidadeJoiSchema.validate({ ...body });

  if (validationError) return res.status(422).json({ validationError });

  try {
    const collection = await getCollection('imoveis');

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
