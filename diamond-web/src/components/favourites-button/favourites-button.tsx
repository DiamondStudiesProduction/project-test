import type { TFavouritesButtonProps } from "../../utils/types/types";
import FavouritesButtonUI from "../ui/favourites-button/favourites-button";

const FavouritesButton: React.FC<TFavouritesButtonProps> = ({ children }) => {
  return <FavouritesButtonUI>{children}</FavouritesButtonUI>;
};

export default FavouritesButton;
