// React stuff
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, withRouter, Link } from 'react-router-dom';
//import { connect } from 'react-redux';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Messages from './components/Messages';
import Login from './components/Login';
//import { newPost } from './components/actions/actualActions';

// Stylesheets
import './App.css';

//let tmpPost;

class App extends Component {
	state = {
		auth: false
	};
	componentDidMount() {}

	render() {
		//console.log(tmpPost);
		/*if (tmpPost !== this.props.post && typeof this.props.post !== undefined) {
			tmpPost = this.props.post;
			if (typeof tmpPost !== undefined) {
				setTimeout(() => {
					console.log(typeof tmpPost);
					this.props.newPost(tmpPost[0]);
				}, 200);
			} else if (typeof tmpPost === undefined) {
				console.log('tmpPost is: ', tmpPost);
			}
		}*/

		const PrivateRoute = ({ props, ...rest }) => (
			<Route {...rest} render={() => (this.props.auth === true ? messages() : <Redirect to="/login" />)} />
		);
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Route path="/" exact render={() => home()} />
					<Route path="/login" exact render={() => login(this.props)} />
					<PrivateRoute path="/messages" render={() => messages()} />
				</div>
			</BrowserRouter>
		);
	}
}

const home = () => {
	return <Home />;
};

const messages = () => {
	return <Messages />;
};

const login = (props) => {
	if (props.auth === true) {
		return <Redirect to="/messages" />;
	} else {
		return <Login />;
	}
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};
export default connect(mapStateToProps)(App);
