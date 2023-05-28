import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { CountUp } from "use-count-up";

const Statistics = () => {
  const [inViewRef, inView] = useInView();
  const [statistics, setStatistics] = useState([
    {
      label: "Years of experience on orphan vulnerable children",
      value: 23,
      animatedValue: 0,
    },
    {
      label: "People Living With Hiv Aids served since 2000",
      value: 86871,
      animatedValue: 0,
    },
    {
      label: "Towns of Ethiopia has been covered since it start",
      value: 73,
      animatedValue: 0,
    },
    {
      label: "Orphan Vulnerable Children has been served by HFC",
      value: 27000,
    },
  ]);

  useEffect(() => {
    if (inView) {
      setStatistics((prevState) =>
        prevState.map((stat) => ({ ...stat, animatedValue: stat.value }))
      );
    }
  }, [inView]);

  return (
    <Box
      sx={{
        backgroundImage: `url(/assets/images/landing1.png)`,
        backgroundSize: "cover",
        minHeight: { xs: "350px", md: "450px" },
        maxHeight: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box sx={{ width: { xs: "90%", md: "80%" } }} ref={inViewRef}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {statistics.map(({ label, value, animatedValue }) => (
            <Grid
              item
              key={label}
              xs={6}
              sm={3}
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  alignSelf: "center",
                }}
              >
                <Stack>
                  <Typography
                    align="center"
                    sx={{
                      color: "white",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: { xs: "32px", md: "36px" },
                    }}
                  >
                    {inView && (
                      <CountUp isCounting={true} duration={2} end={value} />
                    )}
                    {!inView && value} +
                  </Typography>
                  <hr
                    style={{
                      width: "100%",
                      border: "none",
                      borderBottom: "2px solid #00B1F4",
                    }}
                  />
                </Stack>
              </Stack>
              <Typography
                sx={{ color: "white" }}
                variant="subtitle1"
                align="center"
              >
                {label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Statistics;
