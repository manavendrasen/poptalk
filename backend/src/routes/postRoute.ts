import { Router } from "express";
import { getAllPublicPosts, getPublicPostById } from "../controller/postController";

const router = Router({ mergeParams: true });

router.get("/public", getAllPublicPosts);
router.get("/public/:postid", getPublicPostById);

export = router;