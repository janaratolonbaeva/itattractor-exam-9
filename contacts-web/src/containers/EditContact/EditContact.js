import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import FormContact from "../../components/FormContact/FormContact";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {getContact, putContact} from "../../store/actions/contactAction";

const useStyle = makeStyles(() => ({
	title: {
		marginBottom: '30px'
	}
}));

const EditContact = (props) => {
	const classes = useStyle();
	const id = props.match.params.id;
	const dispatch = useDispatch();
	const contact = useSelector(state => state.contactOne);
	const [contactEdit, setContactEdit] = useState({});

	useEffect(() => {
		dispatch(getContact(id));
	}, [dispatch, id]);

	useEffect(() => {
		setContactEdit(contact);
	}, [contact]);

	const formHandler = (e) => {
		e.preventDefault();
		dispatch(putContact(id, contactEdit, props.history));
	}

	const dataChange = (e) => {
		console.log(e.target.value);
		const {value, name} = e.target;

		setContactEdit(prevState => ({
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
				Edit Contact
			</Typography>
			{contactEdit && <FormContact
				nameContact={contactEdit.name}
				phone={contactEdit.phone}
				email={contactEdit.email}
				photo={contactEdit.photo}
				image={contactEdit.photo}
				titleImage={contactEdit.name}
				dataChange={dataChange}
				formHandler={formHandler}
			/>}
		</Container>
	);
};

export default EditContact;