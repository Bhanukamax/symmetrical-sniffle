import PostModel from "../../model/post.model";

const getPostById = async (id: string): Promise<any> => {
  const post = await PostModel.findOne({ _id: id });
  if (!post) throw Error(`Post not found by id ${id}`);

  return post;
};

export default getPostById;
