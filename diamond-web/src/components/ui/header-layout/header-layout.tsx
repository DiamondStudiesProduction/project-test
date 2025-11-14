import type { IHeaderLayoutUI } from "../../../utils/types/types";
import AsideHeader from "../../aside-header/aside-header";
import Header from "../../header/header";

const HeaderLayoutUI: React.FC<IHeaderLayoutUI> = ({
  mobileAsideIsOpen,
  handleToggleMobileAside,
}) => {
  return (
    <>
      <Header
        mobileAsideIsOpen={mobileAsideIsOpen}
        handleToggleMobileAside={handleToggleMobileAside}
      />
      <AsideHeader mobileAsideIsOpen={mobileAsideIsOpen} />
    </>
  );
};

export default HeaderLayoutUI;
