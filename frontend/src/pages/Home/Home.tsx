import { Container } from "@mui/material";
import React from "react";
import { supabase } from "../../supabaseClient";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  console.log(supabase.auth.user());
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
};
