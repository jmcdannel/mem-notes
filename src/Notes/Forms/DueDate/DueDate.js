import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const noteType = 'reminder';

function Reminder({ note, setNote }) {
  
  const handleChange = event => {
    const delta = { text: event.target.value };
    setNote({ ...note, ...delta });
  };

  const handleDateChange = date => {
    const delta = { dueDate: date };
    setNote({ ...note, ...delta });
  };

  return (
    <React.Fragment>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="dueDate"
        label="Due Date"
        value={note.dueDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'update due date',
        }}
      />
      <TextField
        id="text"
        label="Multiline"
        multiline
        rowsMax="10"
        value={note.text}
        onChange={handleChange}
      />
    </React.Fragment>
  );
}

export default Reminder;
