import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { generatePirateIpsum } from '../Utils';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header({ dispatch }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLoad = () => {
    dispatch({ type: 'setNotes', payload: generatePirateIpsum() })
    handleClose();
  }

  const handleClearAll = () => {
    dispatch({ type: 'setNotes', payload: [] })
    handleClose();
  }

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography className={classes.title} variant="h5" noWrap>
          memNotes
        </Typography>
        <IconButton aria-controls="menu" aria-label="display more actions" edge="end" color="inherit" onClick={handleClick}>
          <MoreIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClearAll}>Clear All Notes</MenuItem>
          <MenuItem onClick={handleLoad}>Load (10) Pirate Ipsum Reminders</MenuItem>
          <MenuItem disabled onClick={handleClose}>Load (10) Random Notes</MenuItem>
          <MenuItem disabled onClick={handleClose}>Restore Previous Session</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default Header;
