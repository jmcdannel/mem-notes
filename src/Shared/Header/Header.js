import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NotesMenu from './NotesMenu/NotesMenu';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
}));

function Header({ dispatch }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography className={classes.title} variant="h5" noWrap>
          memNotes
        </Typography>
        <NotesMenu dispatch={dispatch} />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default Header;
