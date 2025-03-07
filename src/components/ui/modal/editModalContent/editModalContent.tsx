import { Seminar } from "../../../utils/types";
import styles from "./editModalContent.module.css";

interface RenderEditModalContentProps {
  seminar: Seminar;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
  photo: string;
  description: string;
  date: string;
  time: string;
  setTitleCallBack: React.ChangeEventHandler<HTMLInputElement>;
  setPhotoCallBack: React.ChangeEventHandler<HTMLInputElement>;
  setDescriptionCallBack: React.ChangeEventHandler<HTMLInputElement>;
  setDateCallBack: React.ChangeEventHandler<HTMLInputElement>;
  setTimeCallBack: React.ChangeEventHandler<HTMLInputElement>;
}

export const RenderEditModalContentUI = ({
  seminar,
  onClick,
  title,
  photo,
  description,
  date,
  time,
  setTitleCallBack,
  setPhotoCallBack,
  setDescriptionCallBack,
  setDateCallBack,
  setTimeCallBack,
}: RenderEditModalContentProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Редактирование семинара "{seminar.title}"</p>
      <div>
        <form className={styles.formElement}>
          <input
            value={title}
            className={styles.inputElement}
            onChange={setTitleCallBack}
            /*
            -----
            В реальном проекте здесь были бы регулярные выражения, чтобы можно было бы вписать только то, что соответсвует данному импуту
            -----
            */
          ></input>
          <input
            value={photo}
            className={styles.inputElement}
            onChange={setPhotoCallBack}
          ></input>
          <input
            value={description}
            className={styles.inputElement}
            onChange={setDescriptionCallBack}
          ></input>
          <input
            value={date}
            className={styles.inputElement}
            onChange={setDateCallBack}
          ></input>
          <input
            value={time}
            className={styles.inputElement}
            onChange={setTimeCallBack}
          ></input>
        </form>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={onClick} className={styles.buttonElement}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
