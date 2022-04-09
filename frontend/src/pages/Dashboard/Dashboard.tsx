import { Container } from "@mui/material";
import React from "react";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <Container maxWidth='xl'>
      <h1>Dashboard</h1>
    </Container>
  );
};
