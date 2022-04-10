import React, { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import { Post } from "../../components/Post/Post";
import { Post as PostInterface } from "../../constants/modals/Post";
import { getAllPostForBucket } from "../../api/getPosts";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllPostForBucket("1");
      setPosts(data);
    })();
  }, []);

  return (
    <>
      <Container>
        <Typography
          variant='h6'
          sx={{
            marginBottom: "1rem",
          }}
        >
          Your Recent Additions
        </Typography>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <Post bucketPost={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
