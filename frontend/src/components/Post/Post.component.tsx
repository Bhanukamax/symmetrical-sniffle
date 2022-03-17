import classnames from "classnames";
import usePost from "../../hooks/use-post";
import styles from "../../styles/post.module.scss";
import config from "../../util/config";
import Icon from "../Icon/Icon";

interface PostComponentProps {
  title: string;
  content: string;
  image: string;
  id: string;
  likes: number;
  dislikes: number;
  refetch: Function;
}

const PostComponent: React.FC<PostComponentProps> = ({
  id,
  title,
  content,
  likes,
  dislikes,
  refetch,
  image,
}) => {
  const { post: likePost } = usePost(`post/${id}/like`);
  const { post: dislikePost } = usePost(`post/${id}/dislike`);

  const handleLikePost = async () => {
    await likePost();
    refetch();
  };

  const handleDislikePost = async () => {
    await dislikePost();
    refetch();
  };

  return (
    <div className={classnames("card mb-5", styles.wrapper)}>
      <img
        className={classnames("card-img-top", styles.image)}
        src={config.api + "uploads/" + image}
        alt="Post"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <button className={styles.button} onClick={handleLikePost}>
          {likes} <Icon icon="thumbs-up" />
        </button>
        <button className={styles.button} onClick={handleDislikePost}>
          {dislikes} <Icon icon="thumbs-down" />
        </button>
      </div>
    </div>
  );
};

export default PostComponent;
