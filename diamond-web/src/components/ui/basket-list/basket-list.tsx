import BasketItem from '../../basket-item/basket-item';
import styles from './basket-list.module.css'

const BasketListUI = () => {
  return (
    <section>
      <h2 className='title_page'>КОРЗИНА</h2>
      <ul className={styles.main_container}>
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
      </ul>
    </section>
  );
};

export default BasketListUI;
