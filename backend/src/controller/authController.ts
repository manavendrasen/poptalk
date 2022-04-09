import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";
import asyncHandler from "../middleware/async";
import ErrorResponse from "../utils/errorResponse";
import jwt from "jsonwebtoken";
import { IUserAuthInfoRequest } from "../middleware/auth";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateToken";

//@desc		Login user
//@route		POST /api/v1/auth/login
//@access		Public
export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    // Validate emil & password
    if (!email || !password) {
      return next(
        new ErrorResponse("Please provide an email and password", 400)
      );
    }

    const userRepository = getRepository(User);
    let user = await userRepository.findOne({
      where: { email },
    });

    if (!user) {
      return next(
        new ErrorResponse("User does not exist or invalid credentials!", 401)
      );
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendTokenResponse(user, 200, res);
  }
);

//@desc		Register user
//@route		POST /api/v1/auth/register
//@access		Public
export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    // Validate emil & password
    if (!name || !email || !password) {
      return next(new ErrorResponse("Please provide all fields", 400));
    }

    const userRepository = getRepository(User);

    const user = userRepository.create({
      name,
      email: email.toLowerCase(),
      password,
    });

    await userRepository.save(user);

    sendTokenResponse(user, 200, res);
  }
);

//@desc		Get current logged in user
//@route		GET /api/v1/auth/me
//@access		Private
export const getMe = asyncHandler(
  async (req: IUserAuthInfoRequest, res: Response, next: NextFunction) => {
    res.status(200).json({
      success: true,
      data: req.user,
    });
  }
);

//@desc		Logout user / Clear cookie
//@route		GET /api/v1/auth/logout
//@access		Private
export const logout = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    res.cookie("access_token", "none", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });

    res.cookie("refresh_token", "none", {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
    });
  }
);

//@desc         Get new access token
//@route        get /api/v1/auth/refresh-token
//@access       Public
export const refreshToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { refreshToken } = req.cookies.refresh_token;

    if (!refreshToken) {
      return next(new ErrorResponse("Please provide a refresh token", 400));
    }

    try {
      //@ts-ignore
      const { id } = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET!
      );

      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { id },
      });

      if (!user) {
        return next(new ErrorResponse("Invalid refresh token", 400));
      }

      const newAccessToken = generateAccessToken(id);

      const options = {
        httpOnly: true,
        secure: false,
      };

      res
        .status(200)
        .cookie("access_token", { accessToken: newAccessToken }, options)
        .cookie("refresh_token", { refreshToken }, options)
        .json({
          success: true,
        });
    } catch (err) {
      return next(new ErrorResponse("Invalid refresh token", 400));
    }
  }
);

//@desc         Delete User
//@route        DELETE /api/v1/auth/delete
//@access       Public
export const deleteUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    const userRepository = getRepository(User);
    await userRepository.delete({ email: email });
    res.status(200).json({ success: true, data: {} });
  }
);

// Get token from model, create cookie and send response
const sendTokenResponse = (user: User, statusCode: number, res: Response) => {
  // Create token
  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  const options = {
    httpOnly: true,
    secure: false,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("access_token", { accessToken }, options)
    .cookie("refresh_token", { refreshToken }, options)
    .json({
      success: true,
    });
};
