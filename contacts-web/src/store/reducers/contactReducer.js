import {
	GET_CONTACT_SUCCESS,
	GET_CONTACTS_FAILURE,
	GET_CONTACTS_REQUEST,
	GET_CONTACTS_SUCCESS,
	OPEN_CONTACT,
	POST_NEW_CONTACT_FAILURE,
	POST_NEW_CONTACT_REQUEST,
	POST_NEW_CONTACT_SUCCESS,
	PUT_CONTACT_FAILURE,
	PUT_CONTACT_REQUEST,
	PUT_CONTACT_SUCCESS,
	REMOVE_CONTACT
} from "../actions/contactAction";

const initialState = {
	contacts: [],
	loading: false,
	postNewContactError: '',
	getContactsError: '',
	contact: {},
	putContactError: '',
	contactOne: null
};


const contactReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_NEW_CONTACT_REQUEST:
			return {...state, loading: true}
		case POST_NEW_CONTACT_SUCCESS:
			return {...state, loading: false}
		case POST_NEW_CONTACT_FAILURE:
			return {...state, loading: false, postNewContactError: action.error}
		case GET_CONTACTS_REQUEST:
			return {...state, loading: true}
		case GET_CONTACTS_SUCCESS:
			return {...state, loading: false, contacts: action.data}
		case GET_CONTACTS_FAILURE:
			return {...state, loading: false, getContactsError: action.error}
		case REMOVE_CONTACT:
			return {...state, }
		case OPEN_CONTACT:
			return {
				...state,
				contact: {
					contact: state.contacts[action.id],
					id: action.id
				}
			}
		case PUT_CONTACT_REQUEST:
			return {...state, loading: true}
		case PUT_CONTACT_SUCCESS:
			return {...state, loading: false}
		case PUT_CONTACT_FAILURE:
			return {...state, loading: false, putContactError: action.error}
		case GET_CONTACT_SUCCESS:
			return {...state, loading: false, contactOne: action.contact}
		default:
			return state;
	}
}

export default contactReducer;