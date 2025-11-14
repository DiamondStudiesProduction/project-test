import styles from "./footer.module.css";

const FooterUI = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.container_blocks}>
          <p className={styles.title}>ПОКУПАТЕЛЯМ</p>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <a className="a_hover_opacity">Доставка</a>
            </li>
            <li className={styles.list_item}>
              <a className="a_hover_opacity">Оплата</a>
            </li>
            <li className={styles.list_item}>
              <a className="a_hover_opacity">Возврат</a>
            </li>
          </ul>
        </div>
        <div className={styles.container_blocks}>
          <p className={styles.title}>ПРОДАВЦАМ</p>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <a className="a_hover_opacity">Стать продавцом</a>
            </li>
          </ul>
        </div>
        <div className={styles.container_blocks}>
          <p className={styles.title}>ИНФОРМАЦИЯ</p>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <a className="a_hover_opacity">Конфидециальность</a>
            </li>
          </ul>
        </div>
        <div className={styles.container_blocks}>
          <p className={styles.title}>О НАС</p>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <a className="a_hover_opacity">+7 911 493 13 39</a>
            </li>
            <li className={styles.list_item}>
              <a className="a_hover_opacity">DIAMOND_SHOP@mail.ru</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.title} ${styles.copyright}`}>
        © DIAMOND 2025
      </div>
    </footer>
  );
};

export default FooterUI;
