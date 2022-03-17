import * as mongoose from "mongoose";

export interface PostType {
  _id: string;
  title: string;
  content: string;
  image: string;
  likes: number;
  dislikes: number;
}

const postSchema = new mongoose.Schema<PostType>(
  {
    title: String,
    content: String,
    image: String,
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model<PostType>("Post", postSchema);

export default PostModel;
