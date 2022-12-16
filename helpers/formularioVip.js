/* eslint-disable no-plusplus */

export const validacao = (dados) => {
  if (
    !dados.nome
    || !dados.email
    || !dados.celular
  ) {
    return false;
  }

  if (dados.celular.indexOf('_') !== -1) {
    return false;
  }
  return true;
};

export const infosErro = {
  texto: 'Ocorreu um erro!',
  linkTexto: 'Clique aqui e tente novamente.',
  tipo: 'erro',
  href: '/',
};

export const infosSucesso = {
  texto: 'Você agora faz parte da lista VIP!',
  linkTexto: 'Continuar navegando no Site.',
  tipo: 'sucesso',
  href: '/',
};
