import styles from "./main.module.css";

const MainUI = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span className={styles.title_letter}>D</span>IAMOND
      </h1>
      <div className={styles.container}>
        <section className={styles.section1}><h2 className={`${styles.title_gender} a_hover_opacity`}><a>ЖЕНСКОЕ&gt;</a></h2></section>
        <section className={styles.section2}><h2 className={`${styles.title_gender} a_hover_opacity`}><a>&lt;МУЖСКОЕ</a></h2></section>
      </div>
      <div className={styles.main_image}></div>
    </div>
  );
};

export default MainUI;
