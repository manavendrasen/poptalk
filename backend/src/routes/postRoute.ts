import { Router } from "express";

const router = Router({ mergeParams: true });

router.get("/public");
router.get("/public/:postid");

export = router;