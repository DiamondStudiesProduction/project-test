import clsx from "clsx";
import type {TFavouritesButtonProps } from "../../../utils/types/types";

const FavouritesButtonUI: React.FC<TFavouritesButtonProps> = ({ children }) => {
  const className = clsx('button_reset_styles');
  return <button className={className}>{children}</button>;
};
export default FavouritesButtonUI;
