import React from 'react';
import Note from '../Note/Note';
function NotesList() {

  const notes = Array(10).fill({ type: 'simple', text: 'note' });
  return (
    <section className="notes-list">
      {notes.map((note, idx) => (
        <Note key={idx} note={note} />
      ))}
    </section>
  );
}

export default NotesList;
