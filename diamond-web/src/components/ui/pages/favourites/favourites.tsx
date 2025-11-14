import FavouritesItem from "../../../favourites-item/favourites-item";
import styles from './favourites.module.css'
const FavouritesUI = () => {
  return (
    <main className="btn">
      <div>
        <section>
          <h2 className="title_page">ИЗБРАННОЕ</h2>
          <ul className={styles.list_container}>
            <FavouritesItem />
          </ul>
        </section>
      </div>
    </main>
  );
};

export default FavouritesUI;
