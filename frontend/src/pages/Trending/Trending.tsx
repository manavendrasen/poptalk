import { Container } from "@mui/material";
import React from "react";

interface TrendingProps {}

export const Trending: React.FC<TrendingProps> = () => {
  return (
    <Container maxWidth='xl'>
      <h1>Trending</h1>
    </Container>
  );
};
