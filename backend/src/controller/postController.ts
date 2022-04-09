import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middleware/async";

export const getAllPublicPosts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    
  }
)

export const getPublicPostById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    
  }
)
