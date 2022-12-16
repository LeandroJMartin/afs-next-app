/**
 * remove +, () e outros caracteres especiais de strings
 * @param {string} telefone
 */
export const limpaTelefone = (telefone) => telefone.replace(/[^\w]/gi, '');
