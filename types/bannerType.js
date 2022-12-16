import { arrayOf, shape, number, string, bool } from "prop-types";

const bannerType = shape({
  _id: string.isRequired,
  titulo: string,
  link: string.isRequired,
  folhas: bool,
  images: arrayOf(
    shape({
      type: string.isRequired,
      max_width: number,
      path: string.isRequired
    })
  )
});

export default bannerType;
