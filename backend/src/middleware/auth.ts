import { User } from "./../entities/User";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "./async";
import ErrorResponse from "../utils/errorResponse";
import { getRepository } from "typeorm";
import { USER_ROLE } from "../constants/userRoles";
import jwt from "jsonwebtoken";

export interface IUserAuthInfoRequest extends Request {
  user: User | undefined;
}

//@desc	          Protect resources
//@route	    MIDDLEWARE

export const protect = asyncHandler(
  async (req: IUserAuthInfoRequest, res: Response, next: NextFunction) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Set token from Bearer token in header
      token = req.headers.authorization.split(" ")[1];
      // Set token from cookie
    } else if (req.cookies.access_token) {
      const { accessToken } = req.cookies.access_token;
      token = accessToken;
    }

    if (!token) {
      return next(new ErrorResponse("Invalid Token", 401));
    }

    const userRepository = getRepository(User);
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
      console.log(decoded);

      const user = await userRepository.findOne({
        // @ts-ignore
        where: { id: decoded.id },
      });
      req.user = user;
      next();
    } catch (err: any) {
      return next(
        new ErrorResponse("User is not authorized to access this route", 403)
      );
    }
  }
);

export const authorize = (role: typeof USER_ROLE) => {
  return (req: IUserAuthInfoRequest, res: Response, next: NextFunction) => {
    let userRole = req.user && req.user.role;
    if (userRole !== role) {
      return next(
        new ErrorResponse(`User is not authorized to access this route`, 403)
      );
    }
    next();
  };
};
