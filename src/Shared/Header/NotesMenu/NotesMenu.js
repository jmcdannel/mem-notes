import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { generatePirateIpsum } from '../../Utils';

function NotesMenu({ dispatch }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = event => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const blabberOnLikeAGentlemenOFortune = () => {
		dispatch({ type: 'setNotes', payload: generatePirateIpsum() })
		handleClose();
	}

	const handleClearAll = () => {
		dispatch({ type: 'setNotes', payload: [] })
		handleClose();
	}

	return (
		<React.Fragment>
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
				<MenuItem onClick={blabberOnLikeAGentlemenOFortune}>Load (10) Pirate Ipsum Reminders</MenuItem>
				<MenuItem disabled onClick={handleClose}>Load (10) Random Notes</MenuItem>
				<MenuItem disabled onClick={handleClose}>Restore Previous Session</MenuItem>
			</Menu>
		</React.Fragment>
	);
}

NotesMenu.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default NotesMenu;
