import { Box } from "@mui/material";
import React from "react";
import { HiFire, HiStar } from "react-icons/hi";
import { BUCKET, FAV, TRENDING } from "./routes";

export const menuRoutes = [
  {
    id: "General",

    children: [
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
        id: "Party",
        route: BUCKET + "/hello",
        icon: <Box>🎁</Box>,
      },
    ],
  },
];
