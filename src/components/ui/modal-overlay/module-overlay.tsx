import styles from "./module-overlay.module.css";

export const ModalOverlayUI = ({ onClick }: { onClick: () => void }) => (
  <div className={styles.overlay} onClick={onClick} />
);
