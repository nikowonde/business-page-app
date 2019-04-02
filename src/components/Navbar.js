import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
	return (
		<div className="header">
			<nav className="nav">
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/" className="nav-link">
					Blog
				</Link>
				<Link to="/" className="nav-link">
					Gallery
				</Link>
				<Link to="/messages" className="nav-link">
					Messages
				</Link>
				{props.auth === true ? <button onClick={() => props.signOut()}>SIGN OUT</button> : ''}
			</nav>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch({ type: 'SIGN_OUT' })
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
