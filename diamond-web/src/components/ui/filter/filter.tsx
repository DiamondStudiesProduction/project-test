import Button from "../../button/button";
import Checkbox from "../../checkbox/checkbox";
import RangeSlider from "../../range-slider/range-slider";
import styles from "./filter.module.css";
const FilterUI = () => {
  return (
      <section>
        <form className={styles.main_form}>
          <div>
            <p className={styles.title}>Цвет</p>
            <div className={styles.checkbox_container}>
              <Checkbox text="Белый" id="color_white" />
              <Checkbox text="Черный" id="color_black" />
              <Checkbox text="Розовый" id="color_pink" />
            </div>
          </div>
          <div>
            <p className={styles.title}>Размер</p>
            <div className={styles.checkbox_container}>
              <Checkbox text="L" id="size_L" />
              <Checkbox text="M" id="size_M" />
            </div>
          </div>
          <div>
            <p className={styles.title}>Цена</p>
            <div className={styles.checkbox_container}>
              <RangeSlider />
            </div>
          </div>
          <div>
            <div className={styles.checkbox_container}>
              <Button>Применить</Button>
            </div>
          </div>
        </form>
      </section>
  );
};

export default FilterUI;
