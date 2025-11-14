import Line from "../../line/line";
import styles from "./basket-item.module.css";

const BasketItemUI = () => {
  return (
    <li className={styles.item_container}>
      <div className={styles.item_container_elements}>
        <a className={styles.item}>
          <div className={styles.image_description_container}>
            <img
              src="../../../../public/images/footbolka.png"
              className={styles.image}
            />
            <div className={styles.description_container}>
              <span>Футболка DIAMOND Белая</span>
              <span>
                Цвет: <span className={styles.special}>белый</span>
              </span>
              <span>
                Размер: <span className={styles.special}>L</span>
              </span>
            </div>
          </div>
        </a>
        <div className={styles.price_counter_container}>
          <div className={styles.discount_container}>
            <span className={styles.price_item}>5 000 руб</span>
            <span className={styles.discount}>6 000 руб</span>
          </div>
          <div className={styles.counter}>
            <button className={styles.button_counter}>
              <svg
                width="16"
                height="1"
                viewBox="0 0 16 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1111 1H0.888889C0.653141 1 0.427049 0.947322 0.26035 0.853554C0.0936507 0.759786 0 0.632608 0 0.5C0 0.367392 0.0936507 0.240214 0.26035 0.146446C0.427049 0.052678 0.653141 0 0.888889 0H15.1111C15.3469 0 15.573 0.052678 15.7397 0.146446C15.9064 0.240214 16 0.367392 16 0.5C16 0.632608 15.9064 0.759786 15.7397 0.853554C15.573 0.947322 15.3469 1 15.1111 1Z"
                  fill="#929292"
                />
              </svg>
            </button>
            <span>1</span>
            <button className={styles.button_counter}>
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 4.16666V15.8333"
                  stroke="#929292"
                />
                <path
                  d="M4.58337 10H17.4167"
                  stroke="#929292"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Line />
    </li>
  );
};

export default BasketItemUI;
