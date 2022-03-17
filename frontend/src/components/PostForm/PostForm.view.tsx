import classnames from "classnames";
import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import styles from "../../styles/postForm.module.scss";
import PostEditor from "../PostEditor/PostEditor.component";

const PostFormView = forwardRef(
  ({ handleFormSubmit }: any, editorRef: any) => {
    const { handleSubmit, register } = useFormContext();

    return (
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={classnames(styles.wrapper, "form-group card my-5")}>
          <h2>New Post</h2>

          <input
            type="text"
            {...register("title")}
            placeholder="Title"
            className="form-control"
          />
          <PostEditor ref={editorRef} />
          <div className={styles.buttons}>
            <input type="file" {...register("file")} />
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
    );
  }
);

export default PostFormView;
