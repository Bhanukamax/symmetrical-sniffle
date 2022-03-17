import avatar from "../../res/img/avatar.png";
import styles from "../../styles/avatar.module.scss";

interface AvatarProps {
  name: string;
  email: string;
  phone: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, email, phone }) => {
  return (
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar" />
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default Avatar;
