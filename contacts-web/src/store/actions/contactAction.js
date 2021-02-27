import axiosContacts from "../../axios-contacts";

export const POST_NEW_CONTACT_REQUEST = 'POST_NEW_CONTACT_REQUEST';
export const POST_NEW_CONTACT_SUCCESS = 'POST_NEW_CONTACT_SUCCESS';
export const POST_NEW_CONTACT_FAILURE = 'POST_NEW_CONTACT_FAILURE';
export const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const OPEN_CONTACT = 'OPEN_CONTACT';
export const PUT_CONTACT_REQUEST = 'PUT_CONTACT_REQUEST';
export const PUT_CONTACT_SUCCESS = 'PUT_CONTACT_SUCCESS';
export const PUT_CONTACT_FAILURE = 'PUT_CONTACT_FAILURE';
export const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS';

export const postNewContactRequest = () => ({type: POST_NEW_CONTACT_REQUEST});
export const postNewContactSuccess = () => ({type: POST_NEW_CONTACT_SUCCESS});
export const postNewContactFailure = error => ({type: POST_NEW_CONTACT_FAILURE, error});
export const getContactsRequest = () => ({type: GET_CONTACTS_REQUEST});
export const getContactsSuccess = data => ({type: GET_CONTACTS_SUCCESS, data});
export const getContactsFailure = error => ({type: GET_CONTACTS_FAILURE, error});
export const removeContact = contact => ({type: REMOVE_CONTACT, contact});
export const openContact = id => ({type: OPEN_CONTACT, id});
export const putContactRequest = () => ({type: PUT_CONTACT_REQUEST});
export const putContactSuccess = () => ({type: PUT_CONTACT_SUCCESS});
export const putContactFailure = () => ({type: POST_NEW_CONTACT_FAILURE});
export const getContactSuccess = (contact) => ({type: GET_CONTACT_SUCCESS, contact});

export const createContact = (contact, history) => {
	return async dispatch => {
		try	{
			dispatch(postNewContactRequest());
			await axiosContacts.post('contacts/.json', contact);
			dispatch(postNewContactSuccess());
			history.push('/');
		} catch (e) {
			dispatch(postNewContactFailure(e));
		}
	}
}

export const fetchContacts = () => {
	return async dispatch => {
		try {
			dispatch(getContactsRequest());
			const response = await axiosContacts.get('contacts/.json');
			dispatch(getContactsSuccess(response.data));
		} catch (e) {
			dispatch(getContactsFailure(e))
		}
	}
}

export const putContact = (id, contact, history) => {
	return async dispatch => {
		try	{
			dispatch(putContactRequest());
			await axiosContacts.put(`contacts/${id}.json`, contact);
			dispatch(putContactSuccess());
			history.push('/');
		} catch (e) {
			dispatch(putContactFailure(e));
		}
	}
}

export const getContact = (id) => {
	return async dispatch => {
		try {
			const response = await axiosContacts.get(`contacts/${id}.json`);
			dispatch(getContactSuccess(response.data));
		} catch (e) {
			console.log(e);
		}
	}
}

export const deleteContact = (id) => {
	return async (dispatch) => {
		await axiosContacts.delete(`/contacts/${id}.json`);
		await dispatch(fetchContacts());
	}
}