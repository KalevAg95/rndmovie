import axios from 'axios';


//req with axios and returns response form server (data.user)
export default {
	user:{
		login: credentials => 
		  axios.post('/api/auth', {credentials}).then(res => res.data.user)
	}
};