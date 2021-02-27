import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "./Header.css";
import {Button} from "@material-ui/core";

const useStyle = makeStyles(() => ({
	root: {
		marginBottom: '30px'
	},
	toolbar: {
		padding: '0'
	},
	list: {
		textAlign: 'right'
	},
	listItem1: {
		display: 'inline-block',
		color: '#fff',
		fontSize: '18px',
		width: 'auto',
		marginRight: '15px',
	},
	listItem2: {
		display: 'inline-block',
		color: '#fff',
		fontSize: '18px',
		width: 'auto'
	}
}));

const Header = () => {
	const classes = useStyle();

	return (
		<header className={classes.root}>
			<AppBar position="static">
				<Container maxWidth="md">
					<Toolbar className={classes.toolbar}>
						<Grid container justify="space-between" alignItems="center">
							<Grid item>
								<Typography>
									Contacts
								</Typography>
							</Grid>
							<Grid item>
								<Button
									variant="contained"
									color="default"
									component={NavLink}
									to="/add-contact"
								>
									Add new Dish
								</Button>
							</Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</header>
	);
};

export default Header;