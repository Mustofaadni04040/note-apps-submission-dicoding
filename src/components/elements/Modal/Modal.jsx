import FormInput from "../Form/FormInput";
import PropTypes from "prop-types";
import "./style.css";

export default function Modal({ onAddNoteHandler, onToggleModal }) {
  const modalContent = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onToggleModal}>
        <div className="modal-content" onClick={modalContent}>
          <h2>Tambah Catatan</h2>
          <FormInput
            onAddNoteHandler={onAddNoteHandler}
            onToggleModal={onToggleModal}
          />
        </div>
      </div>
    </div>
  );
}
Modal.propTypes = {
  onAddNoteHandler: PropTypes.func,
  onToggleModal: PropTypes.func,
};
