import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

const useStyle = makeStyles(() => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		maxWidth: '500px',
		marginBottom: '20px',
		padding: '10px',
		cursor: 'pointer',
	},
	image: {
		marginRight: '20px',
		width: '100px',
		height: '100px',
		overflow: 'hidden',
		borderRadius: '6px'
	},
	title: {
		marginBottom: '10px',
		fontSize: '20px'
	}
}));


const ContactItem = (props) => {
	const classes = useStyle();

	return (
		<Card className={classes.root}>
			<div>
				<Avatar
					className={classes.image}
					src={props.photo}
					alt="Avatar"
				/>
			</div>
			<CardContent>
				<Typography className={classes.title}>{props.name}</Typography>
				<Button
					onClick={props.handleOpen}
					variant="contained"
					color="primary"
				>
					More info
				</Button>
			</CardContent>
		</Card>
	);
};

export default ContactItem;