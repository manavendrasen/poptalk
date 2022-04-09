import React from "react";
import {
  Card,
  Box,
  Typography,
  Button,
  CircularProgress,
  Menu,
  MenuItem,
} from "@mui/material";
import { BsThreeDots } from "react-icons/bs";
import { Post as PostInterface } from "../../constants/modals/Post";
import { useRecoilState } from "recoil";
import locationState from "../../recoil/atoms/location";

interface PostProps {
  post: PostInterface;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const [location, setLocation] = useRecoilState(locationState);
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
            🎉
          </Box>
          <Typography variant='body1'>{post.loc_name}</Typography>
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
          <Button onClick={handleClick}>Chat Here</Button>
        </Box>
      </Box>

      <blockquote className='twitter-tweet'>
        <a href={post.post_url}>
          <CircularProgress />
        </a>
      </blockquote>
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
