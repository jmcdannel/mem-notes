
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
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState();
  const [loadForm, setLoadForm] = useState(false);
  const [note, setNote] = useState({});

  useEffect(() => {
    const newNote = { 
      type: selectedType ? selectedType.value : null, 
      id: props.state.notes.length 
    };
    setNote({ ...note, ...newNote});
  }, [selectedType]);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCreate = () => {
    props.dispatch({ type: 'add', payload: note });
    setOpen(false);
    setNote({});
    setLoadForm(false);
  };
  
  return (
    <React.Fragment>
      <Fab onClick={handleOpen} aria-label="Add Note" className={classes.fab}>
        <AddIcon />
      </Fab>

      <Dialog onClose={handleClose} aria-labelledby="add-note-dialog-title" open={open}>
        <DialogTitle id="add-note-dialog-title">Add Note</DialogTitle>
        <DialogContent>
          {!!loadForm 
            ? (<FormLoader 
                note={note}
                setNote={setNote} 
                state={props.state} 
                dispatch={props.dispatch} 
              />)
            : (<NoteType setSelectedType={setSelectedType} selectedType={selectedType} />)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          {!!loadForm
            ? (
              <Button onClick={handleCreate} color="primary" disabled={!selectedType}>
                Save
              </Button>
            ) : (
              <Button onClick={() => setLoadForm(true)} color="primary" disabled={!selectedType}>
                Next
              </Button>
            )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddNote;
