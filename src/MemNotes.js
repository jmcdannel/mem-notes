import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import notesReducer, { initialState } from './Store/Notes';
import { Header } from './Shared';
import Grid from '@material-ui/core/Grid';
import Note from './Notes/Note/Note';
import AddNote from './Notes/Add/AddNote';
import './MemNotes.scss';

function MemNotes() {
  const [state, dispatch] = useReducer(notesReducer, initialState);
  
  console.log('state', state);
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Box my={10}>
        <Container className="MemNotes" maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {state.notes.map((value, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                    <Note 
                      note={value}
                      state={state} 
                      dispatch={dispatch}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <AddNote state={state} dispatch={dispatch} />
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default MemNotes;
