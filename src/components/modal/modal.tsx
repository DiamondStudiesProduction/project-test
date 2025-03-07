import { useEffect } from "react";
import { ModalUI } from "../ui/modal/modal";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const modalRoot = document.getElementById("modals");
export const Modal = ({ children, title, onClose }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === "Escape" && onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);
  return ReactDOM.createPortal(
    <ModalUI title={title} onClose={onClose}>
      {children}
    </ModalUI>,
    modalRoot as HTMLDivElement
  );
};
