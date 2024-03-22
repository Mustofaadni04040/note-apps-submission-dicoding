import PropTypes from "prop-types";
import "./style.css";
import Card from "../../elements/Card/Card";
export default function Notes({
  onFilteredNotes,
  onDeleteItem,
  onArchiveItem,
}) {
  return (
    <div
      className="note__list"
      style={{ display: onFilteredNotes.length === 0 ? "flex" : "grid" }}
    >
      {onFilteredNotes.length === 0 && (
        <h1 className="note__list-empty">Tidak ada catatan yang tersedia</h1>
      )}
      <Card
        onFilteredNotes={onFilteredNotes}
        onDeleteItem={onDeleteItem}
        onArchiveItem={onArchiveItem}
      />
    </div>
  );
}
Notes.propTypes = {
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
