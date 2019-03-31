import React, { Component } from 'react';

export default class FormContact extends Component {
	render() {
		let tmpMessage = null;
		let tmpName = null;
		let tmpEmail = null;
		let tmpSubject = null;

		const setMessage = (e) => {
			tmpMessage = e.target.value;
			if (typeof tmpMessage === 'string') {
				document.getElementById('button3').style.backgroundColor = 'black';
			}
		};

		const setEmail = (e) => {};

		const setName = (e) => {};

		const setSubject = (e) => {};

		return (
			<div>
				<form>
					<input
						type="text"
						id="name"
						className="contactField"
						required
						placeholder="Your name"
						onChange={(e) => setName(e)}
					/>
					<input
						type="email"
						className="contactField"
						required
						placeholder="Your email"
						onChange={(e) => setEmail(e)}
					/>
					<input
						type="text"
						id="subject"
						className="contactField"
						required
						placeholder="Subject"
						onChange={(e) => setSubject(e)}
					/>
					<textarea
						id="message"
						className="contactField"
						required
						placeholder="message"
						onChange={(e) => setMessage(e)}
					/>
					<button type="submit" id="button3" className="button3" onClick={this.props.onDataSend}>
						SEND
					</button>
				</form>
			</div>
		);
	}
}
