import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  createComment,
  getPostComments,
  likeComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyUser, createComment);
router.get("/getpostcomments/:postId", getPostComments);
router.put("/likecomment/:commentId", verifyUser, likeComment);

export default router;
