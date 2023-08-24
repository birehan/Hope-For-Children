import { Box, Typography, Stack, Link, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Keyboard, Autoplay } from "swiper";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import LandingCardsList from "./LandingCardsList";
import useStyles from "./styles";

const Landing = () => {
  const classes = useStyles();
  const images = [
    {
      src: "/assets/images/stats.png",
      alt: "Landing 1",
    },
    {
      src: "/assets/images/stats.png",
      alt: "Landing 1",
    },
  ];

  return (
    <Box
      sx={{
        // border: "10px solid green",
        position: "relative",
      }}
    >
      <Box sx={classes.landingContainer}>
        <Swiper
          cssMode={true}
          navigation={true}
          spaceBetween={0}
          slidesPerView={"auto"}
          keyboard={true}
          modules={[Autoplay, Navigation, Keyboard]}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide
                style={{
                  width: "100vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  filter: "brightness(100%)",
                  zIndex: 10,
                  margin: "0px 50px",
                }}
                key={index}
                onClick={() => {}}
              >
                <img
                  src={image.src}
                  alt="Background Image"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(50%)",
                  }}
                />

                <Stack sx={classes.swipeImage}>
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
                  {/* <Box sx={{ height: { xs: "0", lg: "100px" } }}></Box> */}
                </Stack>
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
