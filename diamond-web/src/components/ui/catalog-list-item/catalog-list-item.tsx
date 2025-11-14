import FavouritesButton from "../../favourites-button/favourites-button";
import styles from "./catalog-list-item.module.css";

const CatalogListItemUI = () => {
  return (
    <li className={styles.container}>
      <a className={styles.a}>
        <div className={styles.container_images}>
          <div className={styles.fav}>
              <FavouritesButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={styles.heart_fav}
                >
                  <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </FavouritesButton>
          </div>
          <img src="../../../../public/images/footbolka.png"></img>
        </div>
        <span className={styles.text_name}>Футболка DIAMOND Белая</span>
        <div className={styles.discount_container}>
          <span className={styles.text_price}>5 000 Руб</span>
          <span className={styles.discount_sum}>6 000 Руб</span>
          <span className={styles.discount_procent}>15%</span>
        </div>
      </a>
    </li>
  );
};

export default CatalogListItemUI;
