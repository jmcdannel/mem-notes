import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { format } from 'date-fns'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function Note({
  note,
  dispatch,
  state
}) {
  const { noteTypes } = state;
  const { type } = note;
  const classes = useStyles();
  const noteType = noteTypes.find(ntype => ntype.id === type);

  const handleDelete = () => dispatch({ type: 'remove', payload: note });

  const renderComponent = () => {
    const NoteComponent = noteType.renderer;  // important: use Capital letter for this `const` to enable React to render as a component
    return (<NoteComponent note={note} noteType={noteType} />);
  }

  return noteType ? (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="reminder" className={classes.avatar}>
            {noteType.header.substring(0, 1)}
          </Avatar>
        }
        title={noteType.header}
        subheader={note.dueDate ? format(note.dueDate, 'MM/dd/yyyy') : null}
      />
      {renderComponent()}
      <CardActions>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  ) : null;
}

Note.propTypes = {
  note: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string,
    getContent: PropTypes.func
  }),
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Note;
