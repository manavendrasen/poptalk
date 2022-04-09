import { Request, Response, NextFunction } from "express";
import { supabase } from "../config/supabase";
import asyncHandler from "../middleware/async";
import ErrorResponse from "../utils/errorResponse";

export const getAllPublicPosts = asyncHandler(
  async (_req: Request, res: Response, next: NextFunction) => {
    const { data, error } = await supabase.from("posts")
      .select()
      .eq("public", true);

    if (error != null)
      return next(new ErrorResponse("Query Error", 500));

    res.json({ success: true, data });
  }
)

export const getPublicPostById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { postid } = req.params;

    const { data, error } = await supabase.from("posts")
      .select()
      .eq("public", true)
      .eq("id", postid);

    if (error != null)
      return next(new ErrorResponse("Query Error", 500));

    res.json({ success: true, data });
  }
)
