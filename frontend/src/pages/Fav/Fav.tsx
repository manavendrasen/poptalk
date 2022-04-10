import { Container, Typography } from "@mui/material";
import React from "react";

interface FavProps {}

export const Fav: React.FC<FavProps> = () => {
  return (
    <Container maxWidth='xl'>
      <Typography variant='h6'>Trending</Typography>
    </Container>
  );
};
