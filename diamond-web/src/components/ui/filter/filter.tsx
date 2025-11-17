import Button from "../../button/button";
import Checkbox from "../../checkbox/checkbox";
import RangeSlider from "../../range-slider/range-slider";
import styles from "./filter.module.css";
const FilterUI = () => {
  return (
    <section className={styles.container}>
      <form className={styles.main_form}>
        <div>
          <details className={styles.details} open>
            <summary className={styles.title}>Цвет</summary>
            <div className={styles.checkbox_container}>
              <Checkbox text="Белый" id="color_white" />
              <Checkbox text="Черный" id="color_black" />
              <Checkbox text="Розовый" id="color_pink" />
            </div>
          </details>
        </div>
        <div>
          <details className={styles.details} open>
            <summary className={styles.title}>Размер</summary>
            <div className={styles.checkbox_container}>
              <Checkbox text="L" id="size_L" />
              <Checkbox text="M" id="size_M" />
            </div>
          </details>
        </div>
        <div>
          <details className={styles.details} open>
            <summary className={styles.title}>Цена</summary>
            <div className={styles.checkbox_container}>
              <RangeSlider />
            </div>
          </details>
        </div>
        <div>
          <div className={`${styles.checkbox_container} ${styles.checkbox_container_button}`}>
            <Button>Применить</Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FilterUI;
