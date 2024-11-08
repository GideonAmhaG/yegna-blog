import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import { createComment } from "../controllers/comment.controller.js";
import { getPostComments } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyUser, createComment);
router.get("/getpostcomments/:postId", getPostComments);

export default router;
