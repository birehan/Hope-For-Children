import { Grid } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import LandingCard from "./LandingCard";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const LandingCardsList: React.FC = () => {
  const classes = useStyles();

  const cards: CardProps[] = [
    {
      imageUrl: "/assets/images/item1.png",
      title: "Hope For Children",
      description:
        "Sponsor one child payment for the company so that he will have the life he want in the future ok",
    },
    {
      imageUrl: "/assets/images/donation.png",
      title: "Donation",
      description:
        "Sponsor one child payment for the company so that he will have the life he want in the future ok",
    },
    {
      imageUrl: "/assets/images/sponsor.png",
      title: "Sponsor A Child",
      description:
        "Sponsor one child payment for the company so that he will have the life he want in the future ok",
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center" sx={classes.container}>
      {cards.map(({ imageUrl, title, description }, index) => (
        <LandingCard
          key={index}
          imageUrl={imageUrl}
          title={title}
          description={description}
        />
      ))}
    </Grid>
  );
};

export default LandingCardsList;
