import "draft-js/dist/Draft.css";
import * as Quill from "quill";
import "quill/dist/quill.snow.css";
import { forwardRef, useEffect } from "react";
import styles from "../../styles/editor.module.scss";

const PostEditor = forwardRef((_, ref) => {
  useEffect(() => {
    if (!ref.current) return;

    const quill = new Quill(ref.current, {
      theme: "snow",
      height: 100,
    });
    window.qui = quill;
  }, [ref]);

  return (
    <>
      <div className={styles.wrapper} id="test">
        <div ref={ref}></div>
      </div>
    </>
  );
});

export default PostEditor;
