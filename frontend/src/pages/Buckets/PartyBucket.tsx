import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

interface PartyBucketProps {}

export const PartyBucket: React.FC<PartyBucketProps> = () => {
  const { params } = useParams();
  return (
    <Container maxWidth='xl'>
      <h1>Party Bucket {params}</h1>
    </Container>
  );
};
