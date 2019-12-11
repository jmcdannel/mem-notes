import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import { format } from 'date-fns'

const useStyles = makeStyles(theme => ({
  section: {
    margin: theme.spacing(2, 0, 0, 0),
  },
  cardContent: {
    flexGrow: 1,
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function GenericNote({
  note,
  noteType
}) {
  const classes = useStyles();

  const formatField = field => {
    const value = note[field.id];
    switch (field.type) {
      case 'date':
        return format(value, 'MM/dd/yyyy');
      default:
        return value;
    }
  }

  return noteType ? (
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
  ) : null;
}

GenericNote.propTypes = {
  note: PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string,
    getContent: PropTypes.func
  })
};

export default GenericNote;
