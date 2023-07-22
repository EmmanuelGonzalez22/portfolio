import { useEffect, useRef } from "react";
import "./styles.scss";
const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchevent", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchevent", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchevent", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='modal' ref={modalRef} data-modal-visible={isOpen}>
      {children}
    </div>
  );
};

export { Modal };
