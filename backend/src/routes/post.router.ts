import { Router } from "express";

import {
  createPost,
  dislikePost,
  likePost,
  getPosts,
} from "../contorllers/post.controller";
const postRouter = Router();
postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.post("/:id/like", likePost);
postRouter.post("/:id/dislike", dislikePost);

export default postRouter;
