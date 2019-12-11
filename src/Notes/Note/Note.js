import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { format } from 'date-fns'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  section: {
    margin: theme.spacing(2, 0, 0, 0),
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
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

  const formatField = field => {
    const value = note[field.id];
    switch (field.type) {
      case 'date' :
        return format(value, 'MM/dd/yyyy');
      default :
      return value;
    }
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
      <CardContent className={classes.cardContent}>
        <Divider />  
        {note.getContent
          ? note.getContent(note)
          : note.text && (<p>{note.text}</p>)
        }
        <Divider />  
        <div className={classes.section}>
          {noteType.fields && noteType.fields.length > 0 && noteType.fields.map(field => (
            <Chip 
              key={field.id}
              className={classes.chip} 
              icon={(<strong>{field.label}:</strong>)} 
              label={formatField(field)} 
              />
          ))}
        </div>
      </CardContent>
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
