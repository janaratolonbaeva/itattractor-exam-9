import React, {useEffect} from 'react';
import ContactItem from "../../components/ContactItem/ContactItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import {deleteContact, fetchContacts, openContact} from "../../store/actions/contactAction";
import ContactInfoModal from "../../components/ContactInfoModal/ContactInfoModal";
import Modal from "../../components/UI/Modal/Modal";

const Home = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(state => state.contacts);
	const contact = useSelector(state => state.contact.contact);
	const id = useSelector(state => state.contact.id);
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const handleOpen = (id) => {
		setOpen(true);
		dispatch(openContact(id));
	}

	const deleteHandle = (id) => {
		dispatch(deleteContact(id));
		setOpen(false);
	}

	return (
		<>
		<Container maxWidth="md">
			<Grid container direction="column">
				{Object.keys(contacts).map((item, index) => {
					return (
						<ContactItem
							key={index}
							photo={contacts[item].photo}
							name={contacts[item].name}
							handleOpen={() => handleOpen(item)}
						/>
					)
				})}
			</Grid>
		</Container>
			<Modal show={open} closed={() => setOpen(false)}>
				{contact && <ContactInfoModal
					name={contact.name}
					phone={contact.phone}
					photo={contact.photo}
					email={contact.email}
					id={id}
					deleteContact={deleteHandle}
				/>}
			</Modal>
		</>
	);
};

export default Home;