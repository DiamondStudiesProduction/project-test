import React, { MouseEventHandler } from "react";
import { Seminar } from "../../../utils/types";
import styles from "./seminar.module.css";
interface SeminarProps {
  onClickDelete: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickEdit: MouseEventHandler<HTMLButtonElement> | undefined;
  seminar: Seminar;
}

export const SeminarUI: React.FC<SeminarProps> = ({
  onClickDelete,
  onClickEdit,
  seminar,
}) => {
  return (
    <li className={styles.container}>
      <h2 className={styles.title}>{seminar.title}</h2>
      <div className={styles.photoContainer}>
        <img
          src={seminar.photo}
          alt={seminar.title}
        />
        <p>{seminar.description}</p>
      </div>
      <p>Дата: {seminar.date}</p>
      <p>Время: {seminar.time}</p>
      <div className={styles.buttonsContainer}>
      <button onClick={onClickDelete} className={styles.buttonElement}>Удалить</button>
      <button onClick={onClickEdit} className={styles.buttonElement}>Редактировать</button>
      </div>
    </li>
  );
};
