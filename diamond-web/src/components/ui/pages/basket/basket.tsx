
import BasketCheckout from "../../../basket-checkout/basket-checkout";
import BasketList from "../../../basket-list/basket-list";
import styles from './basket.module.css';

const BasketUI = () => {
  return (
    <main className="btn">
      <div className={styles.container}>
        <BasketList />
        <BasketCheckout />
      </div>
    </main>
  );
};

export default BasketUI;
