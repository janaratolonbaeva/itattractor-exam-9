import axios from "axios";

const axiosContacts = axios.create({
	baseURL: 'https://contacts-eb57b-default-rtdb.firebaseio.com/'
});

export default axiosContacts;