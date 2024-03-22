import PropTypes from "prop-types";
import { showFormattedDate } from "../../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function ArchivedCard({
  archivedItem,
  onDeleteArchive,
  onHandlerUndoItem,
}) {
  return (
    <>
      <div className="archived__list-card" key={archivedItem.id}>
        <div className="archived__list-header">
          <div className="left">
            <h3>{archivedItem.title}</h3>
            <p>{showFormattedDate(archivedItem.createdAt)}</p>
          </div>
          <div className="right">
            <button onClick={() => onDeleteArchive(archivedItem.id)}>
              <FontAwesomeIcon icon={faCircleXmark} className="btn-close" />
            </button>
            <button onClick={() => onHandlerUndoItem(archivedItem.id)}>
              <FontAwesomeIcon icon={faRotateLeft} className="btn-rotate" />
            </button>
          </div>
        </div>
        <div className="archived__list-body">
          <p>{archivedItem.body}</p>
        </div>
      </div>
    </>
  );
}

ArchivedCard.propTypes = {
  archivedItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
  onDeleteArchive: PropTypes.func.isRequired,
  onHandlerUndoItem: PropTypes.func.isRequired,
};
