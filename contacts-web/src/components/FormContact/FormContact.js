import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const useStyle = makeStyles(() => ({
	gridItem: {
		marginBottom: '20px',
	},
	input: {
		minWidth: '500px'
	},
	image: {
		width: '200px',
		height: '200px'
	},
	btnMarginRight: {
		marginRight: '20px'
	}
}));


const FormContact = (props) => {
	const classes = useStyle();

	return (
		<form onSubmit={props.formHandler}>
			<Grid container direction="column">
				<Grid item container xs={6} className={classes.gridItem}>
					<Grid item xs={4}>
						<Typography>Name:</Typography>
					</Grid>
					<Grid item xs={8}>
						<TextField
							name="name"
							className={classes.input}
							onChange={props.dataChange}
							value={props.nameContact}
						/>
					</Grid>
				</Grid>
				<Grid item container xs={6} className={classes.gridItem}>
					<Grid item xs={4}>
						<Typography>Phone:</Typography>
					</Grid>
					<Grid item xs={8}>
						<TextField
							name="phone"
							className={classes.input}
							onChange={props.dataChange}
							value={props.phone}
						/>
					</Grid>
				</Grid>
				<Grid item container xs={6} className={classes.gridItem}>
					<Grid item xs={4}>
						<Typography>Email:</Typography>
					</Grid>
					<Grid item xs={8}>
						<TextField
							name="email"
							type="email"
							className={classes.input}
							onChange={props.dataChange}
							value={props.email}
						/>
					</Grid>
				</Grid>
				<Grid item container xs={6} className={classes.gridItem}>
					<Grid item xs={4}>
						<Typography>Photo:</Typography>
					</Grid>
					<Grid item xs={8}>
						<TextField
							name="photo"
							className={classes.input}
							onChange={props.dataChange}
							value={props.photo}
						/>
					</Grid>
				</Grid>
				<Grid item container xs={6} className={classes.gridItem}>
					<Grid item xs={4}>
						<Typography>Preview:</Typography>
					</Grid>
					<Grid item xs={8}>
						<Avatar
							className={classes.image}
							alt={"Avatar" + props.titleImage}
							src={props.image}
						/>
					</Grid>
				</Grid>
				<Grid item container xs={6} className={classes.gridItem}>
					<Button
						type="submit"
						color="secondary"
						variant="contained"
						className={classes.btnMarginRight}
					>
						Save
					</Button>
					<Button
						variant="contained"
						color="primary"
						component={NavLink}
						to="/"
					>
						Back to contacts
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default FormContact;