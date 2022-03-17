import classNames from "classnames";
import { HTMLProps } from "react";

interface IconProps extends HTMLProps<HTMLElement> {
  icon: string;
}
const Icon: React.FC<IconProps> = ({ icon, className }) => {
  return <i className={classNames(`icofont-${icon}`, className)} />;
};

export default Icon;
