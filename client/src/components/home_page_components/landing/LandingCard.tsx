import { Grid, Typography, CardContent, Card, Button } from "@mui/material";
import Image from "next/image";
import useStyles from "./styles";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  index: number;
}
export default function LandingCard({
  imageUrl,
  title,
  description,
  index,
}: Props) {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      sm={5.75}
      md={3.72}
      lg={3}
      sx={{
        padding: "0 !important",
      }}
    >
      <Card
        sx={{
          ...classes.card,
          background: index % 2 == 0 ? "white" : "#00B1F4",
          color: index % 2 == 0 ? "#00B1F4" : "white",
        }}
      >
        <Image
          src={imageUrl}
          alt={title}
          width="120"
          height="120"
          style={{ marginTop: "10px" }}
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
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
            <Button
              sx={{
                ...classes.button,
                color: index % 2 == 0 ? "#00B1F4" : "white",
                border:
                  index % 2 == 0 ? "1px solid #00b1f4" : "1px solid white",
                "&:hover": {
                  backgroundColor: index % 2 == 0 ? "#00B1F4" : "white",
                  color: index % 2 == 0 ? "white" : "#00b1f4",
                  border:
                    index % 2 == 0 ? "1px solid white" : "1px solid  #00b1f4",
                },
              }}
            >
              Read More
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
