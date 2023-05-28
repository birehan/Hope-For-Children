import React from "react";
import { images } from "../../../common/data";
import Image from "next/image";
import Masonry from "react-masonry-css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const breakpointColumnsObj = {
  default: 3,
  1200: 3,
  500: 1, 
};

const Images = () => {
  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex justify-center items-center"
      >
        {images.map((image) => (
          <div key={image.id}>
            <div className="w-full gap-2">
              <Image
                className={`w-full`}
                src={image.imageUrl}
                layout="responsive"
                height={image.h}
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        ))}
      </Masonry>
      <div className="w-full p-10 flex justify-center items-center gap-4">
        <button className="flex justify-center items-center rounded-[50%] p-2 btn"><ArrowBackIosIcon/></button>
        <button className="flex justify-center items-center rounded-[50%] p-2 btn"><ArrowForwardIosIcon/></button>
      </div>
    </div>
  );
};

export default Images;