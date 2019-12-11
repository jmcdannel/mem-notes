import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export const noteType = 'reminder';

function Reminder({ note, setNote, setIsValid }) {

  const handleChange = event => {
    const delta = { text: event.target.value };
    setNote({ ...note, ...delta });
    validate();
  };
  
  const validate = () => {
    const valid = ( note.text && note.text.length > 3);
    setIsValid(valid);
  }

  return (
    <TextField
      id="text"
      label="Note Text"
      multiline
      className="note-form"
      rows="10"
      rowsMax="10"
      value={note.text}
      onChange={handleChange}
    />
  );
}

Reminder.propTypes = {
  note: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string
  }),
};

export default Reminder;
