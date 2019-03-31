import { GET_POSTS, DELETE_POST } from '../actions/actions';

const initState = {
	message: '',
	subject: '',
	sender: '',
	email: '',
	status: false,
	/*messages: [
		{
			id: '1',
			sender: 'Niko',
			email: 'nikowonde@gmail.com',
			subject: 'Kokeilu',
			message: 'Tämä on kokeiluviesti'
		},
		{
			id: '2',
			sender: 'Matti Meikäläinen',
			email: 'matti.meikalainen@gmail.com',
			subject: 'Toka viesti',
			message: 'Poistetaanko tämä?'
		}
    ],*/
	newPost: undefined,
	deletedItem: null,
	posts: []
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'SET_VALUES':
			return {
				...state,
				status: true
			};
		case 'SET_STATUS':
			return {
				...state,
				status: false
			};
		case 'SET_MESSAGE':
			return {
				...state,
				message: action.message
			};
		case 'SET_SUBJECT':
			return {
				...state,
				subject: action.subject
			};
		case 'SET_SENDER':
			return {
				...state,
				sender: action.sender
			};
		case 'SET_EMAIL':
			return {
				...state,
				email: action.email
			};
		case GET_POSTS:
			return {
				...state,
				posts: [ action.payload ]
			};
		case 'SET_NEW_ITEM':
			return {
				...state,
				newPost: [
					{
						sender: state.sender,
						email: state.email,
						subject: state.subject,
						message: state.message,
						id: Math.floor(Math.random() * 1000)
					}
				]
			};
		case 'SET_UNDEFINED':
			return {
				...state,
				newPost: undefined
			};
		/*case 'DELETE_MESSAGE':
			const determineId = (el) => {
				return el.id === action.msg.id;
			};
			let findId = state.messages.find(determineId);
			return {
				...state,
				deletedItem: state.messages.filter((e) => e === findId),
				messages: state.messages.filter((e) => e !== findId)
			};
        */
		case DELETE_POST:
			const determineId = (el) => {
				return el.id === action.id;
			};
			let findId = state.posts[0].find(determineId);
			/*console.log(action.payload);
			console.log(state.posts[0].find(determineId));
			console.log(state.posts[0].filter((e) => e !== findId));*/
			//console.log(state.messages);
			return {
				...state,
				deletedItem: action.payload,
				posts: [ state.posts[0].filter((e) => e !== findId) ]
			};
		/*case UNDO_POST:
			console.log([ ...state.messages, action.payload ]);
			return {
				...state,
				messages: [ ...state.messages, action.payload ]
			};*/
		default:
			return state;
	}
};

export default reducer;
