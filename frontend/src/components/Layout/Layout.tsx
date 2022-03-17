import classNames from "classnames";
import useFetch from "../../hooks/use-fetch";
import styles from "../../styles/layout.module.scss";
import config from "../../util/config";
import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import Picsum from "../Picsum/Picsum";
import PostFormComponent from "../PostForm/PostForm.component";
import PostListComponent from "../PostList/PostList.component";

const Layout = () => {
  const { data, refetch }: any = useFetch(config.api + "post");
  return (
    <>
      <div className={classNames(styles.wrapper)}>
        <Header className={styles.header} />
        <div className={classNames("container", styles.container)}>
          <main className={classNames("row")}>
            <div className="col">
              <Contacts />
            </div>
            <div className="col-7">
              <PostFormComponent refetch={refetch} />
              <PostListComponent data={data} refetch={refetch} />
            </div>
            <div className={classNames("col", styles.right)}>
              <Picsum />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Layout;
