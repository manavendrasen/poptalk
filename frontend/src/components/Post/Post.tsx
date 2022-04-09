import React from "react";
import { Card, Box, Typography, Button, CircularProgress } from "@mui/material";
import { Post as PostInterface } from "../../constants/modals/Post";
import { useRecoilState } from "recoil";
import locationState from "../../recoil/atoms/location";
interface PostProps {
  post: PostInterface;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const [location, setLocation] = useRecoilState(locationState);
  const handleClick = () => {
    setLocation({
      lat: post.loc_lat,
      lng: post.loc_lon,
    });
  };
  return (
    <Card
      sx={{
        background: "background.default",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          paddingX: "1.5rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "500",
          marginTop: "1rem",
        }}
      >
        <Typography variant='body1'>{post.loc_name}</Typography>
        <Button onClick={handleClick}>Chat Here</Button>
      </Box>

      <blockquote className='twitter-tweet'>
        <a href={post.post_url}>
          <CircularProgress />
        </a>
      </blockquote>
    </Card>
  );
};
