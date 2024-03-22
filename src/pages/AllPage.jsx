import Header from "../components/fragments/Header/Header";
import Navbar from "../components/fragments/Navbar/Navbar";
import { useState } from "react";
import { getInitialData } from "../utils";
import { showFormattedDate } from "../utils";
import Notes from "../components/fragments/Notes/Notes";
import Modal from "../components/elements/Modal/Modal";
import ArchivedNotes from "../components/fragments/ArchivedNotes/ArchivedNotes";

export default function AllPage() {
  const [noteItems, setNoteItems] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState(false);
  const [archivedItems, setArchivedItems] = useState([]);

  const toggleModal = () => setModal(!modal);

  const handleDeleteItem = (id) => {
    setNoteItems(noteItems.filter((item) => item.id !== id));
  };

  const formattedDates = noteItems.map((item) =>
    showFormattedDate(item.createdAt)
  );

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredNotes = noteItems.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addNoteHandler = ({ title, body }) => {
    setNoteItems((prevNoteItems) => [
      ...prevNoteItems,
      {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      },
    ]);
  };

  modal
    ? document.body.classList.add("active-modal")
    : document.body.classList.remove("active-modal");

  const handleArchiveItem = (id) => {
    const archivedItem = noteItems.find((item) => item.id === id);

    setArchivedItems((prevItems) => [...prevItems, archivedItem]);
    setNoteItems(noteItems.filter((item) => item.id !== id));
  };

  const handleUndoItem = (id) => {
    const undoItem = archivedItems.find((item) => item.id === id);
    setNoteItems((prevItems) => [...prevItems, undoItem]);
    setArchivedItems(archivedItems.filter((item) => item.id !== id));
  };

  const handleDeleteArchive = (id) => {
    setArchivedItems(archivedItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header onSearchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Navbar onToggleModal={toggleModal} />
      {modal && (
        <Modal onToggleModal={toggleModal} onAddNoteHandler={addNoteHandler} />
      )}
      <Notes
        onFilteredNotes={filteredNotes}
        dates={formattedDates}
        onDeleteItem={handleDeleteItem}
        onArchiveItem={handleArchiveItem}
      />
      <ArchivedNotes
        archivedItems={archivedItems}
        onDeleteArchive={handleDeleteArchive}
        onHandlerUndoItem={handleUndoItem}
      />
    </>
  );
}
