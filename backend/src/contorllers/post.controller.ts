import PostModel from "../model/post.model";
import * as Express from "express";
import getPostById from "../cqrs/query/get-post-by-id";

export const createPost = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    if (!req.body?.title) throw new Error("title not defined");
    await PostModel.create(req.body);
    res.status(200).send("success");
  } catch (e: any) {
    res.status(200).send("failed " + e.message);
  }
};

export const getPosts = async (_: Express.Request, res: Express.Response) => {
  const all = await PostModel.find().sort([["createdAt", -1]]);
  res.status(200).json({ result: all });
};

export const likePost = async (req: Express.Request, res: Express.Response) => {
  try {
    const post = await getPostById(req.params.id);
    post.likes += 1;
    await post.save();

    return res.status(200).json({ result: post });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

export const dislikePost = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const post = await getPostById(req.params.id);
    post.dislikes += 1;
    await post.save();

    return res.status(200).json(post);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
