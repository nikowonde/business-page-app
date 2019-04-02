import { GET_POSTS, DELETE_POST } from './actions';

import Axios from 'axios';

export const getPosts = () => {
	return (dispatch) => {
		Axios.get('https://business-json.herokuapp.com/posts')
			.then((res) => {
				//console.log(res.data);
				dispatch({
					type: GET_POSTS,
					payload: res.data
				});
			})
			.catch((err) => console.log(err));
	};
};

export const deletePost = (id) => {
	return (dispatch) => {
		Axios.get(`https://business-json.herokuapp.com/posts/${id}`)
			.then((res) => {
				console.log(res.data);
				dispatch({
					type: DELETE_POST,
					payload: res.data,
					id: id
				});
			})
			.then(
				Axios.delete(`https://business-json.herokuapp.com/posts/${id}`).then((res) => {
					console.log(res);
				})
			)
			.catch((err) => console.log(err));
	};
};

export const undoPost = (undoData) => {
	return () => {
		Axios.post(`https://business-json.herokuapp.com/posts`, {
			id: undoData.id,
			sender: undoData.sender,
			email: undoData.email,
			subject: undoData.subject,
			message: undoData.message
		})
			.then((res) => {
				//console.log(res.data);
			})
			.catch((err) => console.log(err));
	};
};

export const newPost = (tmp) => {
	return (dispatch) => {
		Axios.post(`https://business-json.herokuapp.com/posts`, {
			id: tmp.id,
			sender: tmp.sender,
			email: tmp.email,
			subject: tmp.subject,
			message: tmp.message
		})
			.then(() => {
				//console.log(res.data);
				/*setTimeout(() => {
                }, 5000);*/
				dispatch({
					type: 'SET_UNDEFINED'
				});
			})
			.catch((err) => console.log(err));
	};
};

//export default getPosts;
/*

  {
    "id": 2,
    "sender": "Matti Meikäläinen",
    "email": "matti.meikalainen@gmail.com",
    "subject": "Toka viesti",
    "message": "Poistetaanko tämä?"
  }

*/
