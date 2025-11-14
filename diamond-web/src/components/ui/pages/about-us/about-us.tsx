import styles from "./about-us.module.css";

const AboutUsUI = () => {
  return (
    <main>
      <div>
        <section>
          <div className={styles.blocks_container}>
            <div className={styles.info_container}>
              <h2 className={styles.title}>О НАС</h2>
              <p>
                DIAMOND - Это бренд, для тех, кто знает что он хочет и тд и тп и
                я сосу хуй
              </p>
              <p>
                Наш магазин работает с 2014 года и имеет более 1000 покупалетей
              </p>
              <p>
                Мы ценимся качеством товара, его стоимостью и быстрой доставки
              </p>
            </div>
            <div className={styles.info_container}>
              <h2 className={styles.title}>ПОКУПАТЕЛЯМ</h2>
              <h3 className={styles.subtitle}>Доставка</h3>
              <p>Осуществляется по Москве: и московкской область</p>
              <p>Самовывоз - бесплатно</p>
              <p>Доставка в пределах МКАД - 300 рублей</p>
              <p>
                Доставка по московской области - 300 рублей + 50 руб. за каждый
                км
              </p>
              <h3 className={`${styles.subtitle} ${styles.subtitle_margin}`}>
                ОПЛАТА
              </h3>
              <p>Оплата возможна наличными, переводом, онлайн - оплатой</p>
              <h3 className={`${styles.subtitle} ${styles.subtitle_margin}`}>
                ВОЗВРАТ
              </h3>
              <p>Возврат осуществляется при наличии брака</p>
            </div>
            <div className={styles.info_container}>
              <h2 className={styles.title}>ПРОДАВЦАМ</h2>
              <h3 className={styles.subtitle}>Стать продавцом</h3>
              <p>по этому поводу пишите сюда: DIANONDSTUDIES@mail.ru</p>
            </div>
            <div className={styles.info_container}>
              <h2 className={styles.title}>КОНФЕДИЦИАЛЬНОСТЬ</h2>
              <p>Она здесь</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUsUI;
