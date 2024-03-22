import PropTypes from "prop-types";
import Logo from "../../elements/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import "./style.css";

export default function Header({ searchTerm, onSearchChange }) {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <header className="header__section">
      <Logo />
      <div className="header__section-search">
        <FontAwesomeIcon
          icon={faSearch}
          style={{ color: "#0ea5e9" }}
          className="search__icon"
          onClick={focusInput}
        />
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Cari Catatan..."
          ref={inputRef}
        />
      </div>
    </header>
  );
}
Header.propTypes = {
  searchTerm: PropTypes.func,
  onSearchChange: PropTypes.func,
};
