import { Request, Response, NextFunction } from "express";
import { supabase } from "../config/supabase";
import asyncHandler from "../middleware/async";
import ErrorResponse from "../utils/errorResponse";

export const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userid } = req.params;

    const { data, error } = await supabase.from("buckets").insert({
      name: 'Default',
      description: 'Default bucketlist',
      user_id: userid
    });

    if (error) 
      return next(new ErrorResponse("Query Error", 500));

    res.json({ success: true, data })

  }
)

export const getBucketsForUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userid } = req.params;

    const { data, error } = await supabase.from("buckets")
      .select()
      .eq("user_id", userid);

    if (error != null)
      return next(new ErrorResponse("Query Error", 500));

    res.json({ success: true, data });
  }
)

export const getBucketById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userid, bucketid } = req.params;

    const { data, error } = await supabase.from("buckets")
      .select()
      .eq("user_id", userid)
      .eq("id", bucketid);

    if (error !== null)
      return next(new ErrorResponse("Query Error", 500));

    res.json({ success: true, data });
  }
);


export const getPostsInBucket = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userid, bucketid } = req.params;

    const { data, error } = await supabase.from("posts")
      .select()
      .eq("user_id", userid)
      .eq("bucket_id", bucketid);

    if (error !== null)
      return next(new ErrorResponse("Query Error", 500));

    res.json({ success: true, data });
  }
);


export const createPostInBucket = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userid, bucketid } = req.params;
    const postData = req.body;

    const bucketResponse = await supabase.from("buckets")
      .select()
      .eq("user_id", userid)
      .eq("id", bucketid);

    if (bucketResponse.error !== null) {
      return next(new ErrorResponse("Query Error", 500));
    }

    if (bucketResponse.count !== 0) {
      const { data, error } = await supabase.from("posts").insert({
        ...postData,
        user_id: userid,
        bucket_id: bucketid
      });

      if (error !== null) {
        return next(new ErrorResponse("Query Error", 500));
      }

      return res.json({ success: true, data })
    }

    next(new ErrorResponse("Unauthorized", 401));
  }
);

export const getPostById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userid, bucketid, postid } = req.params;

    console.log(JSON.stringify(req.params));

    const { data, count, error } = await supabase.from("posts")
      .select()
      .eq("user_id", userid)
      .eq("bucket_id", bucketid)
      .eq("id", postid);

    console.log(data, count);

    if (error !== null)
      return next(new ErrorResponse("Query Error", 500));

    res.json({ success: true, data });
  }
);

export const makePostPublicById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userid, bucketid, postid } = req.params;

    const { data, error } = await supabase.from("posts")
      .update({"public": true})
      .eq("user_id", userid)
      .eq("bucket_id", bucketid)
      .eq("id", postid);

    if (error !== null)
      return next(new ErrorResponse("Query Error", 500));

    res.json({ success: true, data });
  }
);
