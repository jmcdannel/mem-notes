import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export const noteType = 'reminder';

function Reminder({ note, setNote }) {

  const handleChange = event => {
    const delta = { text: event.target.value };
    setNote({ ...note, ...delta });
  };

  return (
    <TextField
      id="text"
      label="Multiline"
      multiline
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
