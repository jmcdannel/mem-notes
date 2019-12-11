
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
    backgroundColor: theme.palette.background.paper,
  }
}));

function NoteType({ noteTypes, selectedType, setSelectedType }) {
  const classes = useStyles();

  const handleType = type => {
    if (selectedType && selectedType.id === type.id) {
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
            key={type.id}
            onClick={() => handleType(type)}
            selected={(selectedType && selectedType.id === type.id)}>
            <ListItemText primary={type.label} />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

NoteType.propTypes = {
  noteTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedType: PropTypes.object,
  setSelectedType: PropTypes.func.isRequired
};

export default NoteType;
