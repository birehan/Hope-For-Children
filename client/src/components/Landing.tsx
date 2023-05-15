import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";

const useStyles = () => {
  return {
    landingContainer: {
      height: { xs: "500px", md: "700px" },
      width: "100vw",
      // background: "red",

      // background: " #0F111D",
      filter: "brightness(80%)",
      // border: "3px solid green",
    },
    swiperContainer: {},
    swipeImage: {
      // width: "100px",
      // height: "100px",
    },
  };
};
const Landing = () => {
  const classes = useStyles();
  const images = [
    {
      src: "/assets/images/landing1.png",
      alt: "Landing 1",
    },
    {
      src: "/assets/images/pic2.jpg",
      alt: "Landing 1",
    },
    {
      src: "/assets/images/landing1.png",
      alt: "Landing 1",
    },
  ];

  return (
    <Box role="header" sx={classes.landingContainer}>
      <div className="content">
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          spaceBetween={0}
          slidesPerView={"auto"}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          style={classes.swiperContainer}
        >
          {images.map((image) => {
            return (
              <SwiperSlide style={classes.swipeImage} onClick={() => {}}>
                <Box
                  sx={{
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: "cover",
                    width: "100vw",
                    height: { xs: "500px", md: "700px" },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>Hello World</Typography>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Box>
  );
};

export default Landing;

/* <SwiperSlide
style={{
  backgroundImage: `url(${image.src})`,
  backgroundSize: "cover",
}}
onClick={() => {}}
>
<div
  style={{
    width: "100vw",
    height: "700px",
    background: "rgba(0,0,0,0.5)",
  }}
>
  {/* Text container with blurred background goes here */
