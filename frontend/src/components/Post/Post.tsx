import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Box, Typography, Button, CircularProgress } from "@mui/material";
import { Tweet } from "react-twitter-widgets";
import { Post as PostInterface } from "../../constants/modals/Post";
import { useRecoilState } from "recoil";
import locationState from "../../recoil/atoms/location";
import postState from "../../recoil/atoms/post";

interface PostProps {
  bucketPost: PostInterface;
}

export const Post: React.FC<PostProps> = ({ bucketPost }) => {
  const navigate = useNavigate();
  const [location, setLocation] = useRecoilState(locationState);
  const [post, setPost] = useRecoilState(postState);

  console.log(post);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = () => {
    setLocation({
      lat: bucketPost.loc_lat,
      lng: bucketPost.loc_lon,
    });
    setPost({
      id: bucketPost.id,
    });
    navigate(`/app/chat/${bucketPost.id}`);
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
            }}
          >
            🥳
          </Box>
          <Typography variant='body1'>{bucketPost.loc_name}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          {/* <Button
            id='basic-button'
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={openOptions}
          >
            <BsThreeDots />
          </Button> */}
          <Button onClick={handleClick}>JOIN BUBBLE</Button>
        </Box>
      </Box>

      {/* <blockquote className='twitter-tweet'>
        <a href={bucketPost.post_url}>
          <CircularProgress />
        </a>
      </blockquote> */}

      <Box
        sx={{
          width: "100%",
          marginLeft: "4rem",
          "& > *": {
            width: "100%",
          },
        }}
      >
        <Tweet
          tweetId={bucketPost.post_id}
          renderError={(error) => {
            console.log(error, bucketPost);
            return <div>Error</div>;
          }}
        />
      </Box>

      {/* <TwitterTweetEmbed
        onLoad={function noRefCheck() {}}
        placeholder={<CircularProgress />}
        tweetId={post.id}
      /> */}
      {/* 
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Menu> */}
    </Card>
  );
};
