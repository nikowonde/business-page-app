import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class ContantForm extends React.Component {
	state = {
		err1: 'Name length must be 4 or longer',
		err2: 'Please enter proper email address',
		err3: 'Subject length must 5 or longer',
		err4: 'Message length must be 20 or longer',
		error: '',
		sender: undefined,
		email: undefined,
		subject: undefined,
		message: undefined
	};

	componentDidMount() {
		document.getElementById('button3').addEventListener('keypress', function(event) {
			let key = event.which || event.keyCode;
			if (key === 13) {
				event.preventDefault();
			}
		});
		document.getElementById('name').addEventListener('keypress', function(event) {
			let key = event.which || event.keyCode;
			if (key === 13) {
				event.preventDefault();
			}
		});
		document.getElementById('email').addEventListener('keypress', function(event) {
			let key = event.which || event.keyCode;
			if (key === 13) {
				event.preventDefault();
			}
		});
		document.getElementById('subject').addEventListener('keypress', function(event) {
			let key = event.which || event.keyCode;
			if (key === 13) {
				event.preventDefault();
			}
		});
		document.getElementById('message').addEventListener('keypress', function(event) {
			let key = event.which || event.keyCode;
			if (key === 13) {
				event.preventDefault();
			}
		});
	}

	render() {
		let emailCheck = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

		const setName = (e) => {
			//console.log(this.props.sender);
			if (typeof e.target.value === 'string' && this.props.sender.length < 3) {
				this.setState({
					error: this.state.err1
				});
				document.getElementById('errorLog').style.display = 'block';
				document.getElementById('name').style.border = '2px solid red';
			} else {
				document.getElementById('errorLog').style.display = 'none';
				document.getElementById('name').style.border = '2px solid rgb(10, 0, 39)';
			}
		};

		const setEmail = () => {
			//console.log('email test', emailCheck.test(this.props.email.toLowerCase()));
			if (!emailCheck.test(this.props.email.toLowerCase())) {
				this.setState({
					error: this.state.err2
				});
				document.getElementById('errorLog').style.display = 'block';
				document.getElementById('email').style.border = '2px solid red';
			} else {
				document.getElementById('errorLog').style.display = 'none';
				document.getElementById('email').style.border = '2px solid rgb(10, 0, 39)';
			}
		};

		const setSubject = () => {
			if (this.props.subject.length < 4) {
				this.setState({
					error: this.state.err3
				});
				document.getElementById('errorLog').style.display = 'block';
				document.getElementById('subject').style.border = '2px solid red';
			} else {
				document.getElementById('errorLog').style.display = 'none';
				document.getElementById('subject').style.border = '2px solid rgb(10, 0, 39)';
			}
		};

		const setMessage = () => {
			//console.log(this.props.sender);
			if (this.props.message.length < 19) {
				this.setState({
					error: this.state.err4
				});
				document.getElementById('errorLog').style.display = 'block';
				document.getElementById('message').style.border = '2px solid red';
			} else {
				document.getElementById('errorLog').style.display = 'none';
				document.getElementById('message').style.border = '2px solid rgb(10, 0, 39)';
				buttonUsable();
			}
		};

		const buttonUsable = () => {
			if (
				typeof this.props.sender === 'string' &&
				typeof this.props.email === 'string' &&
				typeof this.props.subject === 'string' &&
				typeof this.props.message === 'string'
			) {
				//console.log('onko email true?', emailCheck.test(this.props.email.toLowerCase()));
				//console.log('viesti on pitempi kuin 19', this.props.message.length > 19);
				//console.log('nimen pituus', this.props.sender.length);
				if (
					emailCheck.test(this.props.email.toLowerCase()) &&
					this.props.sender.length > 3 &&
					this.props.message.length > 19
				) {
					document.getElementById('button3').style.backgroundColor = 'rgb(10, 0, 39)';
					document.getElementById('button3').style.pointerEvents = 'auto';
					//console.log('change button to usable');
				}
			}
		};

		const postNewItem = () => {
			this.setState({
				sender: this.props.sender,
				email: this.props.email,
				subject: this.props.subject,
				message: this.props.message
			});
			setTimeout(() => {
				if (
					typeof this.state.sender === 'string' &&
					typeof this.state.email === 'string' &&
					typeof this.state.subject === 'string' &&
					typeof this.state.message === 'string'
				) {
					Axios.post(`https://business-json.herokuapp.com/posts`, {
						id: Math.floor(Math.random() * 1000),
						sender: this.state.sender,
						email: this.state.email,
						subject: this.state.subject,
						message: this.state.message
					});
					document.getElementById('email').value = '';
					document.getElementById('name').value = '';
					document.getElementById('subject').value = '';
					document.getElementById('message').value = '';
				}
			}, 1000);
		};

		return (
			<div className="contactForm">
				<span className="errorLog" id="errorLog">
					{this.state.error}
				</span>
				<div autoComplete="off">
					<input
						type="name"
						maxLength="35"
						id="name"
						className="contactField"
						placeholder="Your name"
						autoComplete="off"
						onChange={(e) => this.props.nameSend(e) + setName(e)}
					/>
					<input
						type="email"
						id="email"
						maxLength="35"
						className="contactField"
						placeholder="Your email"
						autoComplete="off"
						onChange={(e) => this.props.emailSend(e) + setEmail()}
					/>
					<input
						type="text"
						id="subject"
						maxLength="50"
						className="contactField"
						placeholder="Subject"
						autoComplete="off"
						onChange={(e) => this.props.subjectSend(e) + setSubject()}
					/>
					<textarea
						id="message"
						maxLength="500"
						className="contactField"
						placeholder="Message"
						onChange={(e) => this.props.messageSend(e) + setMessage()}
					/>
					<button
						type="button"
						className="button3"
						id="button3"
						onClick={(e) => {
							postNewItem(e);
							this.props.onDataSend();
						} /*(e) => this.props.onDataSend(e) + this.props.setNewItemToArr()*/}
					>
						SEND
					</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		nameSend: (e) => dispatch({ type: 'SET_SENDER', sender: e.target.value }),
		emailSend: (e) => dispatch({ type: 'SET_EMAIL', email: e.target.value }),
		subjectSend: (e) => dispatch({ type: 'SET_SUBJECT', subject: e.target.value }),
		messageSend: (e) => dispatch({ type: 'SET_MESSAGE', message: e.target.value }),
		onDataSend: () =>
			dispatch({
				type: 'SET_VALUES'
			}) + console.log('data was send'),
		setNewItemToArr: () => dispatch({ type: 'SET_NEW_ITEM' })
	};
};

const mapStateToProps = (state) => {
	return {
		sender: state.sender,
		email: state.email,
		subject: state.subject,
		message: state.message
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ContantForm);
