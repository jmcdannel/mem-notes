
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

import FormLoader from '../../Shared/FormLoader/FormLoader';
import NoteType from './NoteType/NoteType';

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  }
}));

function AddNote(props) {
  const { length: numNotes } = props.state.notes;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState();
  const [loadForm, setLoadForm] = useState(false);
  const [note, setNote] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newNote = {
      type: selectedType ? selectedType.id : null,
      id: numNotes // TODO: use more robust unique ID.
    };
    setNote(n => { return { ...n, ...newNote }; });
    setIsValid(false);
  }, [selectedType, setIsValid, numNotes]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => close();

  const handleCreate = () => {
    props.dispatch({ type: 'add', payload: note });
    close();
  };

  const close = () => {
    setSelectedType(null);
    setOpen(false);
    setNote({});
    setLoadForm(false);
    setIsValid(false);
  }

  return (
    <React.Fragment>
      <Fab onClick={handleOpen} aria-label="Add Note" className={classes.fab} color="secondary">
        <AddIcon />
      </Fab>

      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        onClose={handleClose}
        aria-labelledby="add-note-dialog-title"
        open={open}>
        <DialogTitle id="add-note-dialog-title">Add Note</DialogTitle>
        <DialogContent>
          {!!loadForm
            ? (<FormLoader
              note={note}
              setNote={setNote}
              state={props.state}
              setIsValid={setIsValid}
            />)
            : (<NoteType noteTypes={props.state.noteTypes} setSelectedType={setSelectedType} selectedType={selectedType} />)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          {!!loadForm
            ? (
              <Button onClick={handleCreate} color="secondary" disabled={!isValid}>
                Save
              </Button>
            ) : (
              <Button onClick={() => setLoadForm(true)} color="secondary" disabled={!selectedType}>
                Next
              </Button>
            )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

AddNote.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default AddNote;
