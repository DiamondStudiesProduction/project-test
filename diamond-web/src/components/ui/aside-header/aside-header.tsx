import type { IAsideHeaderUI } from "../../../utils/types/types";
import styles from "./aside-header.module.css";

const AsideHeaderUI: React.FC<IAsideHeaderUI> = ({
  mobileAsideIsOpen,
  asideManIsOpen,
  handleToggleAsideManIsOpen,
  asideWomanIsOpen,
  handleToggleAsideWomanIsOpen,
}) => {
  return (
    <>
      <aside
        className={`${styles.container} ${
          mobileAsideIsOpen ? styles.open : ""
        }`}
      >
        <div className={styles.list_container}>
          <a className="a_hover_opacity" onClick={handleToggleAsideManIsOpen}>
            Мужское
          </a>
          <a className="a_hover_opacity" onClick={handleToggleAsideWomanIsOpen}>
            Женское
          </a>
        </div>
      </aside>
      <aside
        className={`${styles.aside_gender} ${
          asideManIsOpen ? styles.open : ""
        }`}
      >
        <div className={styles.back_container}>
          <span className={styles.back} onClick={handleToggleAsideManIsOpen}>
            &lt;
          </span>
        </div>
        <div className={styles.list_container}>
          <a className="a_hover_opacity">Футболки</a>
          <a className="a_hover_opacity">Трусы</a>
          <a className="a_hover_opacity">Носки</a>
          <a className="a_hover_opacity">штаны</a>
        </div>
      </aside>
      <aside
        className={`${styles.aside_gender} ${
          asideWomanIsOpen ? styles.open : ""
        }`}
      >
        <div className={styles.back_container}>
          <span className={styles.back} onClick={handleToggleAsideWomanIsOpen}>
            &lt;
          </span>
        </div>
        <div className={styles.list_container}>
          <a className="a_hover_opacity">Футболки</a>
          <a className="a_hover_opacity">Трусы</a>
          <a className="a_hover_opacity">Носки</a>
          <a className="a_hover_opacity">штаны</a>
        </div>
      </aside>
    </>
  );
};

export default AsideHeaderUI;
