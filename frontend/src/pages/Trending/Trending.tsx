import { Container, Typography } from "@mui/material";
import React from "react";

interface TrendingProps {}

export const Trending: React.FC<TrendingProps> = () => {
  return (
    <Container maxWidth='xl'>
      <Typography variant='h6'>Trending</Typography>
    </Container>
  );
};
