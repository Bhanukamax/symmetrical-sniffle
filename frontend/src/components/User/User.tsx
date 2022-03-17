import Icon from "../Icon/Icon";
import styles from "../../styles/user.module.scss";

interface UserProps {
  name: string;
}
const User = ({ name }: UserProps) => {
  return (
    <div className={styles.wrapper}>
      <div>{name}</div>
      <Icon icon="user-alt-7" className={styles.icon}/>
    </div>
  );
};

export default User;
