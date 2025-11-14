import Button from "../../button/button";
import styles from "./basket-checkout.module.css";
const BasketCheckoutUI = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.title_container}>
            <span className={styles.title}>Товаров: </span>
            <span className={styles.count}>2 шт</span>
          </div>
          <div className={styles.title_container}>
            <span className={styles.title}>Скидка: </span>
            <span className={styles.discount}>2 000 руб</span>
          </div>
          <div className={styles.title_container}>
            <span className={styles.title}>Итого: </span>
            <span className={styles.price}>10 000 руб</span>
          </div>
        </div>
        <Button>Оформить</Button>
      </div>
    </section>
  );
};

export default BasketCheckoutUI;
