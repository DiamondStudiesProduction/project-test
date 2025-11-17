import type { ICatalogUI } from "../../../../utils/types/types";
import CatalogList from "../../../catalog-list/catalog-list";
import Filter from "../../../filter/filter";
import styles from "./catalog.module.css";
const CatalogUI: React.FC<ICatalogUI> = ({
  mobileFilterIsOpen,
  handleTogglemMbileFilter,
}) => {
  return (
    <main className={`btn ${styles.main}`}>
      <div className={styles.filter_container}>
        <div className={styles.filter_text} onClick={handleTogglemMbileFilter}>
          Фильтры <span className={styles.arrow}>↑</span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.filter_content}>
          <Filter />
        </div>
        <CatalogList />
      </div>
      <div
        className={`${styles.filter_container_mobile} ${
          mobileFilterIsOpen ? styles.filter_mobile_isOpen : ""
        }`}
      >
        <div className={styles.filter_container_mobile_content}>
          <div className={styles.container_title}>
            <div onClick={handleTogglemMbileFilter}>
              Фильтры <span className={styles.arrow}>↓</span>
            </div>
          </div>
          <Filter />
        </div>
      </div>
    </main>
  );
};

export default CatalogUI;
