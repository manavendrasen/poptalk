import { Router } from "express";

const router = Router({ mergeParams: true });

router.get("/:userid/");
router.get("/:userid/:bucketid/");
router.get("/:userid/:bucketid/:postid");
router.post("/:userid/:bucketid/post");
router.get("/:userid/:bucketid/:postid/makePublic");

export = router;