import React, { useEffect, useReducer } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import notesReducer, { initialState, storageKey } from './Store/Notes';
import { Header } from './Shared';
import Note from './Notes/Note/Note';
import AddNote from './Notes/Add/AddNote';
import './MemNotes.scss';

const theme = createMuiTheme({
  palette: {  type: 'dark' }
});

function MemNotes() {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state.notes));
  }, [state.notes]);

  return ( 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header dispatch={dispatch} />
      <Box my={10}>
        <Container className="MemNotes" maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {state.notes.length === 0 && (
                  <div className="empty">
                    <p>Add your first note.</p>
                  </div>
                )}
                {state.notes.map((note, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
                    <Note 
                      note={note}
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
      </ThemeProvider>
  );
}

export default MemNotes;
