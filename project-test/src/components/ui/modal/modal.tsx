import styles from "./modal.module.css";
import { ReactComponent as CloseIcon } from "../../../images/close.svg";
import { ModalOverlayUI } from "../modal-overlay/module-overlay";

interface ModalUIProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export const ModalUI = ({ children, title, onClose }: ModalUIProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.buttonCloseContainer}>
            <button className={styles.buttonClose} onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
      </div>
      <ModalOverlayUI onClick={onClose} />
    </>
  );
};
