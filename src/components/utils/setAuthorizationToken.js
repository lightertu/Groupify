import axios from 'axios';

export default function setAuthorization(token) {
	if(token) {
		console.log("setting header")
		axios.defaults.headers.common['Authorization'] = token;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
}
