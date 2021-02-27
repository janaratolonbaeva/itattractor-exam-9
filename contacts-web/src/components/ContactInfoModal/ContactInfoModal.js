import React from 'react';
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
	image: {
		width: '100px',
		height: '100px',
		marginRight: '20px'
	},
	imageWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '30%'
	},
	text: {
		marginLeft: '10px'
	},
	content: {
		marginBottom: '10px'
	},
	btnFirst: {
		marginRight: '20px'
	}
}));

const ContactInfoModal = (props) => {
	const classes = useStyle();

	return (
		<div>
			<Grid container className={classes.content}>
				<div className={classes.imageWrapper}>
					<Avatar
						className={classes.image}
						src={props.photo}
						alt={"Avatar " + props.name}
					/>
				</div>
				<CardContent>
					<Typography variant="h5" component="h5">
						{props.name}
					</Typography>
					<div>
						<Grid container>
							<PhoneIcon/>
							<Typography className={classes.text}>{props.phone}</Typography>
						</Grid>
					</div>
					<div>
						<Grid container>
							<EmailIcon/>
							<Typography className={classes.text}>{props.email}</Typography>
						</Grid>
					</div>
				</CardContent>
			</Grid>
			<Grid container justify="flex-end">
				<Button
					variant="contained"
					component={NavLink}
					to={`/contact/${props.id}`}
					className={classes.btnFirst}
				>
					<EditIcon/>
					Edit
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => props.deleteContact(props.id)}
				>
					<DeleteIcon/>
					Delete
				</Button>
			</Grid>

		</div>
	);
};

export default ContactInfoModal;