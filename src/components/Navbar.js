import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
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
				<Link to="/Messages" className="nav-link">
					Messages
				</Link>
			</nav>
		</div>
	);
};

export default withRouter(Navbar);
