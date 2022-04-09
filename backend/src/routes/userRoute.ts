import { Router } from "express";
import { createPostInBucket, createUser, getBucketById, getBucketsForUser, getPostById, getPostsInBucket, makePostPublicById } from "../controller/userController";

const router = Router({ mergeParams: true });

router.post("/:userid", createUser);
router.get("/:userid/bucket", getBucketsForUser);
router.get("/:userid/bucket/:bucketid", getBucketById);
router.get("/:userid/bucket/:bucketid/post", getPostsInBucket);
router.post("/:userid/bucket/:bucketid/post", createPostInBucket);
router.get("/:userid/bucket/:bucketid/post/:postid", getPostById);
router.put("/:userid/bucket/:bucketid/post/:postid/makePublic", makePostPublicById);

export = router;