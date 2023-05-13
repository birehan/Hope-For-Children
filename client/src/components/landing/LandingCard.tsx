import { Grid, Typography, CardContent, Card, Button } from "@mui/material";
import Image from "next/image";
import useStyles from "./styles";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
}
export default function LandingCard({ imageUrl, title, description }: Props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={8} md={3} lg={3} sx={{ width: "100%" }}>
      <Card sx={classes.card}>
        <Image
          src={imageUrl}
          alt={title}
          width="120"
          height="120"
          style={{ marginTop: "10px" }}
        />
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
  );
}
