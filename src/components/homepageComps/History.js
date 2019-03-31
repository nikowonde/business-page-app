import React from 'react';

const History = () => {
	return (
		<div className="container2" id="history">
			<h1 className="hisTitle">Our History</h1>
			<img
				src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
				alt="general"
				className="hisImg"
			/>
			<div className="historyText">
				<h3>Our company was founded</h3>
				<p className="smolText">13 - 04 - 2012</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id purus neque.</p>
				<h3>First Contract</h3>
				<p className="smolText">24 - 05 - 2012</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id purus neque.</p>
				<h3>Our fifth birthday</h3>
				<p className="smolText">13 - 04 - 2017</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id purus neque.</p>
			</div>
		</div>
	);
};

export default History;
