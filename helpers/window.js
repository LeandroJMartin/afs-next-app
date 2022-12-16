/**
 * retorna o offset top de um elemento
 * @param {string} selector
 * @returns {number} o scrolltop atual do user
 */
export const offsetTopElement = (selector) => document.querySelector(selector).offsetTop;

/**
 * faz o scroll para um elemento
 * @param {string} selector
 * @returns {undefined}
 */
export const scrollToElement = (selector) => {
  const elemento = document.querySelector(selector);
  if (!elemento) return false;

  if (elemento.scrollIntoView) {
    return elemento.scrollIntoView({
      behavior: 'smooth',
    });
  }
  return window.scrollTo({
    top: offsetTopElement(selector),
    left: 0,
    behavior: 'smooth',
  });
};
