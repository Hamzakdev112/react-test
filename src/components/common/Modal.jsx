import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ isOpen, onClose, children, closeButtonColor }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="modal-overlay"
    >
      <div className="modal">
        <button
          style={{ color: closeButtonColor }}
          className="close-button"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
