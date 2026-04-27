import type { IconType } from "react-icons";
import {
  FaBars,
  FaFacebookF,
  FaGoogle,
  FaLock,
  FaRegEnvelope,
  FaRegUser,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const icons = {
  bars: FaBars,
  cart: FaShoppingCart,
  checkCircle: FiCheckCircle,
  envelope: FaRegEnvelope,
  facebook: FaFacebookF,
  google: FaGoogle,
  lock: FaLock,
  search: FaSearch,
  user: FaUser,
  userOutline: FaRegUser,
} satisfies Record<string, IconType>;

export type IconName = keyof typeof icons;

type IconProps = {
  className?: string;
  name: IconName;
  size?: number;
};

export default function Icon({ className, name, size = 18 }: IconProps) {
  const Component = icons[name];

  return <Component aria-hidden="true" className={className} size={size} />;
}
