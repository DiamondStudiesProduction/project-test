import { Seminar } from "../../../utils/types";
import styles from "./deleteModalContent.module.css";

interface RenderDeleteModalContentProps {
  seminar: Seminar;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const RenderDeleteModalContentUI = ({
  seminar,
  onClick,
}: RenderDeleteModalContentProps) => {
  return (
    <>
      <p className={styles.text}>Вы уверены, что хотите удалить семинар "{seminar.title}"?</p>
      <div className={styles.buttonContainer}>
        <button onClick={onClick} className={styles.buttonElement}>
          Удалить
        </button>
      </div>
    </>
  );
};
