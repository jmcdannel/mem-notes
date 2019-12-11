import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
	cardContent: {
		flexGrow: 1
	},
	badge: {
		margin: theme.spacing(2, 0)
	},
	title: {
		padding: theme.spacing(0, 1, 0, 0),
		margin: 0
	},
}));

function ListNote({ note }) {
	const classes = useStyles();

	return (
		<CardContent className={classes.cardContent}>
			<Divider />
			<Badge color="secondary" badgeContent={note.text.split('\n').length} className={classes.badge}>
				<h3 className={classes.title}>{note.title ? note.title : 'List'}</h3>
			</Badge>
			<ul>
				{note.text.split('\n').map((item, idx) => (
					<li key={idx}>{item}</li>
				))}
			</ul>
			<Divider />
		</CardContent >
	);
}

ListNote.propTypes = {
	note: PropTypes.shape({
		type: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		title: PropTypes.string,
		text: PropTypes.string.isRequired
	}).isRequired
};

export default ListNote;
