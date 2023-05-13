import { Box, Typography, Stack, Link, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard, Autoplay } from "swiper";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import LandingCardsList from "./LandingCardsList";
import useStyles from "./styles";

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
    <Box sx={{ position: "relative" }}>
      <Box sx={classes.landingContainer}>
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          spaceBetween={0}
          slidesPerView={"auto"}
          keyboard={true}
          modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index} onClick={() => {}}>
                <Box
                  sx={{
                    ...classes.swipeImage,
                    backgroundImage: `url(${image.src})`,
                  }}
                >
                  <Stack
                    sx={{
                      margin: "0px 50px",
                      width: "100%",
                    }}
                  >
                    <Typography sx={classes.landingText}>
                      <span style={{ color: "#00B1F4" }}>Happiness </span>
                      comes from
                      <span style={{ color: "#00B1F4" }}> your action.</span>
                    </Typography>

                    <Typography sx={classes.landingDesc}>
                      Give a hope for children to grow in healthy environment
                    </Typography>

                    <Stack sx={classes.buttonContainer}>
                      <Link href="/donate" style={{ textDecoration: "none" }}>
                        <Button sx={classes.donateButton}>Donate Now</Button>
                      </Link>

                      <Link href="/donate" style={{ textDecoration: "none" }}>
                        <Button
                          sx={classes.videoButton}
                          startIcon={<PlayCircleFilledWhiteIcon />}
                        >
                          Watch
                        </Button>
                      </Link>
                    </Stack>
                  </Stack>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <LandingCardsList />
    </Box>
  );
};

export default Landing;
