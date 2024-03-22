import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./style.css";

export default function Navbar({ onToggleModal }) {
  return (
    <nav className="navbar__section">
      <div className="navbar__section-status">
        <h1>Catatan Aktif</h1>
      </div>
      <div className="navbar__section-add">
        <FontAwesomeIcon
          icon={faAdd}
          className="navbar__section-add-icon"
          onClick={onToggleModal}
        />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  onToggleModal: PropTypes.func,
};
