import PostComponent from "../Post/Post.component";

const PostListComponent = ({ data, refetch }: any) => {
  return (
    <div>
      {data?.result?.map(
        ({ title, content, image, _id, likes, dislikes }: any) => (
          <PostComponent
            id={_id}
            title={title}
            content={content}
            image={image}
            key={_id}
            likes={likes}
            dislikes={dislikes}
            refetch={refetch}
          />
        )
      )}
    </div>
  );
};

export default PostListComponent;
