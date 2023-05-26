import { images } from "../../models/images";
import Masonry from "react-responsive-masonry";

const Images = () => {
  return (
    <Masonry columnsCount={3} gutter="10px">
      {images.map((image, i) => (
        <img
          key={i}
          src={image.src}
          style={{ width: "100%", display: "block" }}
        />
      ))}
    </Masonry>
  );
};

export default Images;
