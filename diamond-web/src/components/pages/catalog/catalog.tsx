import { useState } from "react";
import CatalogUI from "../../ui/pages/catalog/catalog";

const Catalog = () => {
  const [mobileFilterIsOpen, setMobileFilterIsOpen] = useState<boolean>(false);

  const handleTogglemMbileFilter = () => {
    setMobileFilterIsOpen(!mobileFilterIsOpen);
  };
  
  return (
    <CatalogUI
      mobileFilterIsOpen={mobileFilterIsOpen}
      handleTogglemMbileFilter={handleTogglemMbileFilter}
    />
  );
};

export default Catalog;
