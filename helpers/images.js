/**
 * Formata imagens com base o width e no type
 * @param {array} imagesArray array de images no formato correto
 */
export const sortImages = (imagesArray) => imagesArray
  .sort(({ type }) => (type === 'webp' ? 1 : -1))
  .sort((a, b) => (a.max_width > b.max_width ? -1 : 1));
