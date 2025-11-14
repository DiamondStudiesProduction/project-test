import { useEffect, useState } from "react";
import type { IAsideHeader } from "../../utils/types/types";
import AsideHeaderUI from "../ui/aside-header/aside-header";

const AsideHeader: React.FC<IAsideHeader> = ({ mobileAsideIsOpen }) => {
  const [asideManIsOpen, setAsideManIsOpen] = useState<boolean>(false);
  const [asideWomanIsOpen, setAsideWomanIsOpen] = useState<boolean>(false);

  const handleToggleAsideManIsOpen = () => {
    setAsideManIsOpen(!asideManIsOpen);
  };
  const handleToggleAsideWomanIsOpen = () => {
    setAsideWomanIsOpen(!asideWomanIsOpen);
  };

  useEffect(() => {
    if (!mobileAsideIsOpen) {
      setAsideManIsOpen(false);
      setAsideWomanIsOpen(false);
    }
  }, [mobileAsideIsOpen]);

  return (
    <AsideHeaderUI
      mobileAsideIsOpen={mobileAsideIsOpen}
      asideManIsOpen={asideManIsOpen}
      handleToggleAsideManIsOpen={handleToggleAsideManIsOpen}
      asideWomanIsOpen={asideWomanIsOpen}
      handleToggleAsideWomanIsOpen={handleToggleAsideWomanIsOpen}
    />
  );
};

export default AsideHeader;
