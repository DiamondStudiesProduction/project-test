import Button from "../../button/button";
import FavouritesButton from "../../favourites-button/favourites-button";
import Line from "../../line/line";
import PanelItemColorPallete from "../../panel-item-color-palette/panel-item-color-palette";
import PanelItemSize from "../../panel-item-size/panel-item-size";
import styles from "./panel-item.module.css";

const PanelItemUI = () => {
  return (
    <section>
      <div className={styles.container}>
        <h2>Футболка DIAMOND Белая</h2>
        <p>5 000 Руб</p>
        <div className={styles.sizes_container}>
          <PanelItemSize text="M" />
          <PanelItemSize text="L" />
          <PanelItemSize text="XL" />
        </div>
        <div className={styles.colorPallete_container}>
          <PanelItemColorPallete color="red" />
          <PanelItemColorPallete color="black" />
          <PanelItemColorPallete color="blue" />
        </div>
        <div className={styles.buttons_container}>
          <Button width={11}>В корзину</Button>
          <div className={styles.favButton_container}>
            <FavouritesButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#929292"
              >
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </FavouritesButton>
          </div>
        </div>
        <div className={styles.description_container}>
          <details className={styles.description_container_details}>
            <summary className={styles.description_summary}>Описание</summary>
            <p className={styles.description_text}>
              Футболка, которая умеет быть разной. Вельвет придаёт образу
              глубину и фактуру, а длина миди играет на грани элегантности и
              свободы. Носите её с объемным свитером для расслабленного
              настроения или с приталенной блузой — для безупречно собранного
              силуэта. Это та вещь, что легко вписывается в гардероб и каждый
              раз звучит по-новому.
            </p>
          </details>
          <Line/>
          <details className={styles.description_container_details}>
            <summary className={styles.description_summary}>Доставка</summary>
            <p className={styles.description_text}>
              Доставка осуществляется по Москве
            </p>
          </details>
          <Line/>
        </div>
      </div>
    </section>
  );
};

export default PanelItemUI;
