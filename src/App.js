// React stuff
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { connect } from 'react-redux';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Messages from './components/Messages';
//import { newPost } from './components/actions/actualActions';

// Stylesheets
import './App.css';
//let tmpPost;

export default class App extends Component {
	componentDidMount() {
		//tmpPost = this.props.post;
	}

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

		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Route path="/" exact render={() => home()} />
					<Route path="/Messages" render={() => messages()} />
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

/*const mapStateToProps = (state) => {
	return {
		post: state.newPost
	};
};*/
//export default connect(mapStateToProps, { newPost })(App);
