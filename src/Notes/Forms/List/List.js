import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { isValid } from 'date-fns/fp';

export const noteType = 'list';

function List({ note, setNote, setIsValid }) {

  const defaultNote = { text: '', title: '', dueDate: null };
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setNote(n => { return { ...n, ...defaultNote } });
      setInitialized(true);
    }
  }, [initialized, setInitialized, setNote, defaultNote]);

  const handleChange = event => {
    const delta = { text: event.target.value };
    setNote({ ...note, ...delta });
    validate();
  };

  const handleTitleChange = event => {
    const delta = { title: event.target.value };
    setNote({ ...note, ...delta });
    validate();
  };

  const handleDateChange = date => {
    const delta = { dueDate: date };
    setNote({ ...note, ...delta });
    validate();
  };

  const validate = () => {
    const valid = (
      (!note.dueDate || (note.dueDate && isValid(note.dueDate))) &&
      (note.text && note.text.length > 3)
    );
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
          label="Title"
          value={note.title || defaultNote.title}
          className="note-form"
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <TextField
          id="text"
          label="List Items"
          placeholder="Separate with new lines"
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

List.propTypes = {
  note: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string,
    title: PropTypes.string,
    dueDate: PropTypes.instanceOf(Date)
  }),
};

export default List;
