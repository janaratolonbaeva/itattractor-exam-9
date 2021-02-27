import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FormContact from "../../components/FormContact/FormContact";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {createContact} from "../../store/actions/contactAction";

const useStyle = makeStyles(() => ({
	title: {
		marginBottom: '30px'
	}
}));

const AddContact = (props) => {
	const classes = useStyle();
	const dispatch = useDispatch();
	const [contact, setContact] = useState({
		name: '',
		phone: '',
		email: '',
		photo: ''
	})

	const formHandler = (e) => {
		e.preventDefault();
		dispatch(createContact(contact, props.history));
	}

	const dataChange = (e) => {
		const {value, name} = e.target;

		setContact(prevState => ({
			...prevState,
			[name]: value
		}));
	}

	return (
		<Container maxWidth="md">
			<Typography
				component="h3"
				variant="h3"
				className={classes.title}
			>
				Add new Contact
			</Typography>
			<FormContact
				nameContact={contact.name}
				phone={contact.phone}
				email={contact.email}
				photo={contact.photo}
				image={contact.photo}
				titleImage={contact.name}
				dataChange={dataChange}
				formHandler={formHandler}
			/>
		</Container>
	);
};

export default AddContact;