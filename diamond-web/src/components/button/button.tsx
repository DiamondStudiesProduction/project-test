import type { TButtonProps } from "../../utils/types/types";
import ButtonUI from "../ui/button/button";

const Button: React.FC<TButtonProps> = ({ children, width }) => {
  return <ButtonUI width={width}>{children}</ButtonUI>;
};

export default Button;
