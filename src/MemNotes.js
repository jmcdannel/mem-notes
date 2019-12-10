import React from 'react';
import { Header } from './Shared';
import NotesList from './Notes/List/NotesList';
import './MemNotes.scss';

function MemNotes() {
  return (
    <div className="MemNotes">
      <Header />
      <NotesList />
    </div>
  );
}

export default MemNotes;
