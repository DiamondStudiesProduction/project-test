import CatalogListItem from "../../catalog-list-item/catalog-list-item";
import styles from "./catalog-list.module.css";
const CatalogListUI = () => {
  return (
    <section>
      <div>
        <ul className={styles.list}>
          <CatalogListItem />
          <CatalogListItem />
          <CatalogListItem />
          <CatalogListItem />
          <CatalogListItem />
          <CatalogListItem />
          <CatalogListItem />
          <CatalogListItem />
        </ul>
      </div>
    </section>
  );
};

export default CatalogListUI;
