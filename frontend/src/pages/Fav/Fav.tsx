import { Container } from "@mui/material";
import React from "react";

interface FavProps {}

export const Fav: React.FC<FavProps> = () => {
  return (
    <Container maxWidth='xl'>
      <h1>Fav</h1>
    </Container>
  );
};
