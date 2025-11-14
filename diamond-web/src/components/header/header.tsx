import type { IHeaderUI } from "../../utils/types/types";
import HeaderUI from "../ui/header/header";

const Header: React.FC<IHeaderUI> = ({
  mobileAsideIsOpen,
  handleToggleMobileAside,
}) => {
  return (
    <HeaderUI
      mobileAsideIsOpen={mobileAsideIsOpen}
      handleToggleMobileAside={handleToggleMobileAside}
    />
  );
};

export default Header;
