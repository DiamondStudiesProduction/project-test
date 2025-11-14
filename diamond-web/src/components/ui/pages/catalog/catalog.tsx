import CatalogList from "../../../catalog-list/catalog-list";
import Filter from "../../../filter/filter";
import styles from "./catalog.module.css";
const CatalogUI = () => {
  return (
    <main className={`btn ${styles.main}`}>
      <div className={styles.container}>
        <Filter />
        <CatalogList />
      </div>
    </main>
  );
};

export default CatalogUI;
