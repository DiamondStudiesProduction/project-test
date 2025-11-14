import styles from "./range-slider.module.css";

const RangeSliderUI = () => {
  return (
    <div className={styles.container}>
      <input placeholder="От" type="number"/>
      <input placeholder="До" type="number"/>
    </div>
  );
};

export default RangeSliderUI;
