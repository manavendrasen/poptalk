import React from "react";
import { Box } from "@mui/material";
import { HiFire, HiStar, HiHome } from "react-icons/hi";
import { BiPlus } from "react-icons/bi";
import { APP_HOME, BUCKET, CHAT, CHAT_ROUTE, FAV, TRENDING } from "./routes";

export const menuRoutes = [
  {
    id: "General",

    children: [
      {
        id: "Home",
        route: APP_HOME,
        icon: <HiHome size={24} />,
      },
      {
        id: "Trending",
        route: TRENDING,
        icon: <HiFire size={24} />,
      },
      {
        id: "Favorite",
        route: FAV,
        icon: <HiStar size={24} />,
      },
    ],
  },
  {
    id: "Buckets",

    children: [
      {
        id: "Party On!",
        route: CHAT_ROUTE + "/15",
        icon: <Box>🥳</Box>,
      },
      {
        id: "Friends",
        route: CHAT_ROUTE + "/17",
        icon: <Box>⚽</Box>,
      },
      {
        id: "Add Bucket",
        route: BUCKET + "/new",
        icon: <BiPlus size={24} />,
      },
    ],
  },
];
