import React from 'react';

function Note({
  note
}) {
  return (
    <article className="noteist">
      <p>{note.text}</p>
    </article>
  );
}

export default Note;
