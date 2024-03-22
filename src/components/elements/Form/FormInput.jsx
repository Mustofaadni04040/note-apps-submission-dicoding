import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../Button/Button";

export default function FormInput({ onAddNoteHandler, onToggleModal }) {
  const [state, setState] = useState({
    title: "",
    body: "",
  });
  const bodyChangeHandler = (event) => {
    setState((prevState) => ({
      ...prevState,
      body: event.target.value,
    }));
  };

  const submitEventHandler = (event) => {
    event.preventDefault();
    onAddNoteHandler(state);
    onToggleModal();
  };

  const maxLength = 50;
  const [limit, setLimit] = useState("");

  const titleEventHandler = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= maxLength) {
      setLimit(inputValue);
      setState((prevState) => ({
        ...prevState,
        title: inputValue,
      }));
    }
  };

  return (
    <>
      <form action="" onSubmit={submitEventHandler}>
        <p className="char-limit">Sisa Karakter: {maxLength - limit.length}</p>
        <label htmlFor="judul">Judul Catatan</label>
        <input
          type="text"
          id="judul"
          value={state.title}
          onChange={titleEventHandler}
          className="input__title"
          placeholder="Tulis judul catatan..."
        />
        <label htmlFor="deskripsi">Deskripsi Catatan</label>
        <textarea
          id="deskripsi"
          name="catatan"
          value={state.body}
          className="input__body"
          placeholder="Tuliskan catatanmu disini..."
          onChange={bodyChangeHandler}
        ></textarea>
        <div className="form__content-button">
          <Button
            classname="form__content-close"
            type="button"
            onclick={onToggleModal}
          >
            Batal
          </Button>
          <Button classname="form__content-submit" type="submit">
            Tambah
          </Button>
        </div>
      </form>
    </>
  );
}

FormInput.propTypes = {
  onAddNoteHandler: PropTypes.func,
  onToggleModal: PropTypes.func,
};
