import React, { useState } from "react";
import "../styles/Notes.css";

function Notes() {
  const [note, setNote] = useState("");

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className="notes-container">
      <h4 className="notes-header">All notes</h4>
      <textarea
        className="notes-textarea"
        value={note}
        onChange={handleNoteChange}
        placeholder="This is how I am going to learn MERN Stack in next 3 months"
      />
    </div>
  );
}

export default Notes;
