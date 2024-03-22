import PropTypes from "prop-types";
import ArchivedCard from "../../elements/ArchivedCard/ArchivedCard";
import "./style.css";

export default function ArchivedNotes({
  archivedItems,
  onDeleteArchive,
  onHandlerUndoItem,
}) {
  return (
    <div className="archived__section">
      <div className="archived__section-status">
        <h1>Arsip</h1>
      </div>
      <div
        className="archived__notes"
        style={{ display: archivedItems.length === 0 ? "flex" : "grid" }}
      >
        {archivedItems.length === 0 && (
          <h1 className="note__list-empty">Tidak ada catatan yang tersedia</h1>
        )}
        {archivedItems &&
          archivedItems.map((item) => (
            <ArchivedCard
              key={item.id}
              archivedItem={item}
              onDeleteArchive={onDeleteArchive}
              onHandlerUndoItem={onHandlerUndoItem}
            />
          ))}
      </div>
    </div>
  );
}
ArchivedNotes.propTypes = {
  archivedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ),
  onDeleteArchive: PropTypes.func.isRequired,
  onHandlerUndoItem: PropTypes.func.isRequired,
};
