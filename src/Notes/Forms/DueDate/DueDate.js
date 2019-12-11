import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { isValid } from 'date-fns/fp';

export const noteType = 'dueDate';

function DueDate({ note, setNote, setIsValid }) {

  const defaultNote = { text: '', dueDate: null };

  const handleChange = event => {
    const delta = { text: event.target.value };
    setNote({ ...note, ...delta });
    validate();
  };

  const handleDateChange = date => {
    const delta = { dueDate: date };
    setNote({ ...note, ...delta });
    validate();
  };

  const validate = () => {
    const valid = (isValid(note.dueDate) && note.text && note.text.length > 3);
    setIsValid(valid);
  }

  return (
    <React.Fragment>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            autoOk
            disablePast
            variant="inline"
            margin="normal"
            format="MM/dd/yyyy"
            id="dueDate"
            label="Due Date"
            value={note.dueDate || defaultNote.dueDate}
            onChange={handleDateChange}
            className="note-form"
            KeyboardButtonProps={{
              'aria-label': 'update due date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div>
        <TextField
          id="text"
          label="Note Text"
          multiline
          rows="10"
          rowsMax="10"
          value={note.text || defaultNote.text}
          className="note-form"
          onChange={handleChange}
        />
      </div>
    </React.Fragment>
  );
};

DueDate.propTypes = {
  note: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string,
    dueDate: PropTypes.instanceOf(Date)
  }),
};

export default DueDate;
