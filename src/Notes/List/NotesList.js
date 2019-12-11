import React from 'react';
import Grid from '@material-ui/core/Grid';
import Note from '../Note/Note';

function NotesList(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {props.state.notes.map((value, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
              <Note 
                note={value}
                state={props.state} 
                dispatch={props.dispatch} 
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NotesList;
