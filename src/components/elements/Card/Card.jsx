import PropTypes from "prop-types";
import { showFormattedDate } from "../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import "./style.css";
export default function Card({ onDeleteItem, onFilteredNotes, onArchiveItem }) {
  return (
    <>
      {onFilteredNotes.map((item) => (
        <div className="note__list-card" key={item.id}>
          <div className="note__list-header">
            <div className="left">
              <h3>{item.title}</h3>
              <p>{showFormattedDate(item.createdAt)}</p>
            </div>
            <div className="right">
              <button onClick={() => onDeleteItem(item.id)}>
                <FontAwesomeIcon icon={faCircleXmark} className="btn-close" />
              </button>
              <button onClick={() => onArchiveItem(item.id)}>
                <FontAwesomeIcon icon={faFolderOpen} className="btn-archive" />
              </button>
            </div>
          </div>
          <div className="note__list-body">
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}
Card.propTypes = {
  onFilteredNotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
  onDeleteItem: PropTypes.func.isRequired,
  onArchiveItem: PropTypes.func.isRequired,
};
