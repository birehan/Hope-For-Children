import {
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import Image from "next/image";
import useStyles from "./styles";
import { SwiperSlide } from "swiper/react";
interface Props {
  photoUrl: string;
  title: string;
  description: string;
}
const ProjectCard = ({ photoUrl, title, description }: Props) => {
  const classes = useStyles();

  return (
    <SwiperSlide>
      <Grid
        item
        xs={12}
        sm={8}
        md={4.5}
        lg={3.2}
        sx={{ width: "100%", height: "100%" }}
      >
        <Card sx={classes.card}>
          <CardContent
            sx={{ padding: "32px", paddingBottom: "40px !important" }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                mb: "20px",
                border: "5px solid green",
              }}
            >
              <img src={photoUrl} alt={title} style={{ marginTop: "0px" }} />
            </Box>
            <Typography
              variant="h5"
              component="h2"
              align="center"
              sx={classes.title}
            >
              {title.slice(0, 30)}
              {title.length > 30 && "..."}
            </Typography>
            <Typography variant="body1" align="center" sx={classes.description}>
              {description.slice(0, 150)}
              {description.length > 150 && "..."}
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button sx={classes.button}>Read More</Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </SwiperSlide>
  );
};

export default ProjectCard;
