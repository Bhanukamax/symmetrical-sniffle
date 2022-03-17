import useFetch from "../../hooks/use-fetch";
import styles from "../../styles/picsum.module.scss";


const Picsum = () => {
  const { data, loading, error } = useFetch(
    "https://picsum.photos/v2/list?page=1&limit=10"
  );

  return (
    <div className={styles.wrapper}>
      <h2>Picsum</h2>
      {data.map(({ download_url: url, id }: any) => (
        <div
          className={styles.pic}
          style={{ backgroundImage: `url(${url})` }}
          key={id}
        ></div>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Picsum;
