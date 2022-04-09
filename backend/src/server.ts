import path from "path";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import cookieParser from "cookie-parser";

import setConfig from "./config/config";

import errorHandler from "./middleware/error";

import connectPostgreSQL from "./config/connectPostgreSQL";

import { AUTH_ROUTE, BASE_ROUTE, USER_ROUTE } from "./constants/routes";

import authRouter from "./routes/authRoute";
import userRouter from "./routes/userRoute";

dotenv.config({ path: path.join(__dirname, "config", "config.env") });
const config = setConfig(process.env.NODE_ENV || "DEVELOPMENT");

// Connect to Postgres
// connectPostgreSQL();

const HOST = config.HOST || "localhost";
const PORT = config.PORT || 5000;

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

// Set security headers
app.use(helmet());

// Body parser
app.use(express.json());

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

app.use(`${BASE_ROUTE}${AUTH_ROUTE}`, authRouter);
app.use(`${BASE_ROUTE}${USER_ROUTE}`, userRouter);

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
