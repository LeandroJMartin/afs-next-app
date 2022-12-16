import Joi from "@hapi/joi";
import { getCollection } from "../../lib/db";
import dispararEmailNotificacaoFornecedor from "../../lib/emails/cadastroFornecedorNotificacao";

const fidelidadeJoiSchema = Joi.object({
  razaoSocial: Joi.string().required(),
  pessoa: Joi.string(),
  cnpjCpf: Joi.string(),
  nomeFantasia: Joi.string(),
  endereco: Joi.string(),
  numero: Joi.string(),
  complemento: Joi.string(),
  bairro: Joi.string(),
  cidade: Joi.string(),
  uf: Joi.string(),
  pais: Joi.string(),
  cep: Joi.string(),
  nomeRepresante: Joi.string(),
  celular: Joi.string(),
  fixo: Joi.string(),
  funcao: Joi.string(),
  emailPedidos: Joi.string(),
  site: Joi.string(),
  instagram: Joi.string(),
  facebook: Joi.string(),
  tweeter: Joi.string(),
  whatsapp: Joi.string(),
  ramoAtividade: Joi.string(),
  cnae: Joi.string(),
  contribuinteIcms: Joi.string()
});

export default async (req, res) => {
  const { body } = req;

  const {
    error: validationError,
    value: validatedBody
  } = fidelidadeJoiSchema.validate({ ...body });

  if (validationError) return res.status(422).json({ validationError });

  try {
    const collection = await getCollection("fornecedor");

    const { insertedId } = await collection.insertOne({
      ...validatedBody,
      date: new Date()
    });

    await dispararEmailNotificacaoFornecedor(body);

    return res.status(200).json({
      insertedId
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
