import logo from "../../res/img/logo.png";
import styles from "../../styles/header.module.scss";
import User from "../User/User";
import classNames from "classnames";

interface HeaderLinkProps {
  icon: string;
}

const HeaderLink = ({ icon }: HeaderLinkProps) => {
  return (
    <a href="/#">
      <i className={`icofont-${icon}`}></i>
    </a>
  );
};

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <nav className={classNames(styles.nav, className)}>
      <div className={classNames("container", styles.wrapper)}>
        <div className={styles.links}>
          <HeaderLink icon="ui-settings" />
          <HeaderLink icon="bell-alt" />
          <HeaderLink icon="ui-message" />
        </div>

        <img className={styles.logo} src={logo} alt="logo" />
        <User name="Bhanuka" />
      </div>
    </nav>
  );
};

export default Header;
