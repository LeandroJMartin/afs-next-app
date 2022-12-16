/* eslint-disable no-plusplus */

export const validacao = (dados, assuntos) => {
  if (!dados.nome || !dados.email || !dados.celular || !dados.mensagem) {
    return false;
  }

  if (assuntos && !dados.assunto) {
    return false;
  }

  if (dados.celular.indexOf("_") !== -1) {
    return false;
  }
  return true;
};

export const validacaoPsicologa = (dados, assuntos) => {
  if (!dados.nome || !dados.email || !dados.mensagem) {
    return false;
  }

  return true;
};

export const validaTelefone = telefone => {
  const valido = /^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(
    telefone
  );
  const valido2 = /^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:[9]?[9][9][9][9]))\-?([9][9][9][9]))$/.test(
    telefone
  );
  return valido && !valido2;
};

export const infosErro = {
  texto: "Ocorreu um erro!",
  linkTexto: "Clique aqui e tente novamente.",
  tipo: "erro",
  href: "/"
};

export const infosSucesso = {
  texto: "Seu contato foi enviado!",
  linkTexto: "Fazer um novo contato.",
  tipo: "sucesso",
  href: "/"
};

export const validacaoFornecedor = infos => {
  if (
    !infos.razaoSocial ||
    !infos.pessoa ||
    !infos.cnpjCpf ||
    !infos.nomeFantasia ||
    !infos.endereco ||
    !infos.numero ||
    !infos.complemento ||
    !infos.bairro ||
    !infos.uf ||
    !infos.pais ||
    !infos.cep ||
    !infos.nomeRepresante ||
    !infos.celular ||
    !infos.fixo ||
    !infos.funcao ||
    !infos.emailPedidos ||
    !infos.site ||
    !infos.instagram ||
    !infos.facebook ||
    !infos.tweeter ||
    !infos.whatsapp ||
    !infos.ramoAtividade ||
    !infos.cnae ||
    !infos.contribuinteIcms
  ) {
    return false;
  }
  return true;
};
