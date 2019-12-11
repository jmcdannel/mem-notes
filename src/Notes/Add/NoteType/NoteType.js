
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DialogContentText from '@material-ui/core/DialogContentText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));

function NoteType({ selectedType, setSelectedType }) {
  const classes = useStyles();
  const noteTypes = [
    { value: 'reminder', label: 'Reminder', component: null },
    { value: 'duedate', label: 'Note w/Due Date', component: null }
  ];
  const handleType = type => {
    if (selectedType && selectedType.value === type.value) {
      setSelectedType(undefined);
    } else {
      setSelectedType(type);
    }
  }

  return (
    <React.Fragment>
      <DialogContentText>
        Please select which type of note you'd lile to create.
      </DialogContentText>
      <List className={classes.list} component="nav" aria-label="select note type">
        {noteTypes.map(type => (
          <ListItem button 
            key={type.value}
            onClick={() => handleType(type)} 
            selected={(selectedType && selectedType.value === type.value)}>
            <ListItemText primary={type.label} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

export default NoteType;
