import { Box, Stack, Typography } from "@mui/material";
import statisticsData from "./statisticsData";
import { useInView } from "react-intersection-observer";
import { CountUp } from "use-count-up";
import useStyles from "./styles";

const Statistics = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the count starts only once
    threshold: 0.5, // Adjust the threshold value as needed
  });

  return (
    <Stack sx={classes.statContainer} ref={ref}>
      <img
        src="/assets/images/stats.png"
        alt="Background Image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(40%)",
        }}
      />
      <Stack sx={classes.statListContainer}>
        {statisticsData.map((stats, index) => {
          const MyComponent = () => (
            <CountUp
              isCounting={inView} // Start counting when in view
              start={1}
              end={stats.title}
              duration={2}
            />
          );

          return (
            <Box key={index}>
              <Stack
                sx={{
                  flexDirection: "column",
                  color: "white",
                  width: { xs: "35vw", md: "250px" },
                }}
              >
                <Stack sx={{ width: "fit-content", margin: "auto" }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "28px", md: "40px" },
                      fontWeight: "bold",
                    }}
                  >
                    <MyComponent /> +
                  </Typography>
                  <hr
                    style={{
                      border: 0,
                      height: "3px",
                      backgroundColor: "#00b1f4",
                      margin: "5px 0 0 0",
                    }}
                  />
                </Stack>
                <Typography
                  sx={{ marginTop: "5px", fontSize: { lg: "1.2rem" } }}
                >
                  {stats.description}
                </Typography>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Statistics;
