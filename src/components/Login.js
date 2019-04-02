import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
	state = {
		auth: this.props.auth,
		user: '',
		pw: ''
	};
	render() {
		const loginFunc = (user, pass) => {
			if (user.toString() === this.props.user && pass.toString() === this.props.pw) {
				this.props.authStatusChanger();
			} else {
				alert('Un-authorized access!');
				setTimeout(() => {
					window.location.replace('/login');
				}, 1000);
			}
		};
		return (
			<div>
				<form className="loginForm">
					<input
						type="text"
						id="username"
						placeholder="username"
						required
						className="loginInput"
						onChange={(e) => this.setState({ user: e.target.value })}
					/>
					<br />
					<input
						type="password"
						id="password"
						placeholder="password"
						required
						className="loginInput"
						onChange={(e) => this.setState({ pw: e.target.value })}
					/>
					<br />
					<input
						type="button"
						onClick={(e) => loginFunc(this.state.user, this.state.pw)}
						value="SIGN IN"
						className="button1"
					/>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
		pw: state.pw,
		auth: state.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		authStatusChanger: () => dispatch({ type: 'CHANGE_AUTH_STATUS' })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
