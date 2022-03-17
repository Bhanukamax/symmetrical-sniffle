import useFetch from "../../hooks/use-fetch";
import Avatar from "../Avatar/Avatar";

const Contacts = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h2>Contacts</h2>
      {data.map(({ name, email, phone, id }: any) => (
        <Avatar name={name} email={email} phone={phone} key={id} />
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Contacts;
