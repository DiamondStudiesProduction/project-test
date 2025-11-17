import "../../index.css";
import "../../styles/variables.css";
import AboutItemGallery from "../about-item-gallery/about-item-gallery";
import CatalogListItem from "../catalog-list-item/catalog-list-item";
import HeaderLayout from "../header-layout/header-layout";
import AboutItem from "../pages/about-item/about-item";
import Catalog from "../pages/catalog/catalog";
const App = () => {
  return (
    <>
      <HeaderLayout />
      <Catalog />
    </>
  );
};

export default App;
