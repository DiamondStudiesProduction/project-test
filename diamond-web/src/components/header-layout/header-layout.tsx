import { useState } from "react";
import HeaderLayoutUI from "../ui/header-layout/header-layout";

const HeaderLayout = () => {
  const [mobileAsideIsOpen, setMobileAsideIsOpen] = useState<boolean>(false);

  const handleToggleMobileAside = () => {
    setMobileAsideIsOpen(!mobileAsideIsOpen);
  };

  return (
    <HeaderLayoutUI
      mobileAsideIsOpen={mobileAsideIsOpen}
      handleToggleMobileAside={handleToggleMobileAside}
    />
  );
};

export default HeaderLayout;
