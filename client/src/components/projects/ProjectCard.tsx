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
  imageUrl: string;
  title: string;
  description: string;
}
const ProjectCard = ({ imageUrl, title, description }: Props) => {
  const classes = useStyles();

  return (
    <SwiperSlide>
      <Grid item xs={12} sm={8} md={4.5} lg={3.2} sx={{ width: "100%" }}>
        <Card sx={classes.card}>
          <Box>
            <Image
              src={imageUrl}
              alt={title}
              width="300"
              height="270"
              style={{ marginTop: "20px" }}
            />
          </Box>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              align="center"
              sx={classes.title}
            >
              {title}
            </Typography>
            <Typography variant="body1" align="center" sx={classes.description}>
              {description}
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
