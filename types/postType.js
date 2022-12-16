import {
  shape, string, arrayOf, oneOf, number,
} from 'prop-types';

const ofertaType = shape({
  _id: string.isRequired,
  titulo: string.isRequired,
  date: string,
  tags: arrayOf(string),
  thumbs: arrayOf(
    shape({
      type: oneOf(['webp', 'jpeg', 'png']),
      path: string,
    }),
  ),
  image_hero: arrayOf(
    shape({
      type: string.isRequired,
      max_width: number,
      path: string.isRequired,
    }),
  ),
});

export default ofertaType;
