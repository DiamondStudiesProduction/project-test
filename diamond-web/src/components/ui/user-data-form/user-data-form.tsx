import type { TUserDataComponent } from "../../../utils/types/types";
import Button from "../../button/button";
import styles from "./user-data-form.module.css";

const UserDataFormUI = ({
  title,
  text1,
  text2,
  buttonText,
  linkText,
  linkText2
}: TUserDataComponent) => {
  return (
    <main className="btn">
      <div>
        <section>
          <h2 className={`title_page ${styles.title}`}>{title}</h2>
          <div className={styles.form_container}>
            <form className={styles.form}>
              <div className={styles.info_container}>
                <div className={styles.elements_container}>
                  <p className={styles.title_input}>{text1}</p>
                  <input className={styles.input}></input>
                </div>
                {text2 && <div className={styles.elements_container}>
                  <p className={styles.title_input}>{text2}</p>
                  <input className={styles.input}></input>
                </div>}
              </div>
              <div className={styles.button_container}>
                <Button width={15}>{buttonText}</Button>
              </div>
              <div className={styles.links_container}>
                <a className={`${styles.link} a_hover_opacity`}>{linkText}</a>
                <a className={`${styles.link} a_hover_opacity`}>{linkText2}</a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UserDataFormUI;
