import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import { Post } from "../../components/Post/Post";
import { Post as PostInterface } from "../../constants/modals/Post";

interface DashboardProps {}

const samplePosts: PostInterface[] = [
  {
    id: "1",
    created_at: new Date(),
    loc_lat: 12.731936,
    loc_lon: 77.3305776,
    user_id: "fsdfasd",
    post_id: "1512792743914913797",
    post_url: "https://twitter.com/AllThingTravel/status/1512792743914913797",
    chat_id: "test chat id",
    loc_name: "test location name",
    bucket_id: "test bucket",
  },
  {
    id: "2",
    created_at: new Date(),
    loc_lat: 12.731936,
    loc_lon: 77.3305776,
    user_id: "fsdfasd",
    post_id: "1512792743914913797",
    post_url: "https://twitter.com/AllThingTravel/status/1512792743914913797",
    chat_id: "test chat id",
    loc_name: "test location name",
    bucket_id: "test bucket",
  },
  {
    id: "3",
    created_at: new Date(),
    loc_lat: 12.731936,
    loc_lon: 77.3305776,
    user_id: "fsdfasd",
    post_id: "1512792743914913797",
    post_url: "https://twitter.com/AllThingTravel/status/1512792743914913797",
    chat_id: "test chat id",
    loc_name: "test location name",
    bucket_id: "test bucket",
  },
];

export const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <>
      <Container>
        <h3>Your Recants</h3>
        <Grid container spacing={3}>
          {samplePosts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
