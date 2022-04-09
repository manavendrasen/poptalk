import { Container } from "@mui/material";
import React from "react";

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  return (
    <Container maxWidth='sm'>
      <h1>Login</h1>
    </Container>
  );
};
