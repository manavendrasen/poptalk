import path from "path";
import express from "express";
import dotenv from "dotenv";
import {TwitterApi} from "twitter-api-v2";

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

import morgan from "morgan";
import cors from "cors";
import hpp from "hpp";
import cookieParser from "cookie-parser";

import setConfig from "./config/config";
import { supabase } from "./config/supabase";

import errorHandler from "./middleware/error";

import userRouter from "./routes/userRoute";
import postRouter from "./routes/postRoute";

import { BASE_ROUTE, USER_ROUTE, POST_ROUTE } from "./constants/routes";


const config = setConfig(process.env.NODE_ENV || "DEVELOPMENT");

const HOST = config.HOST || "localhost";
const PORT = config.PORT || 5000;

//set token
const BEARER_TOKEN=config.BEARER_TOKEN;

// app
const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "DEVELOPMENT") {
  app.use(morgan("dev"));
}

app.use(function (req, res, next) {
  console.log("Requested path: %s", req.path);
  next();
});

// Get access to cookies
app.use(cookieParser());

// Body parser
app.use(express.json());

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Routes
app.use(`${BASE_ROUTE}${USER_ROUTE}`, userRouter);
app.use(`${BASE_ROUTE}${POST_ROUTE}`, postRouter);

// Test
app.get(`${BASE_ROUTE}`, (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the API V1",
  });
});

app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${HOST}:${PORT}`
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1));
});

export const twitterClient = new TwitterApi(BEARER_TOKEN);