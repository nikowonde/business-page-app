import React from 'react';

const Team = () => {
	return (
		<div className="container" id="team">
			<h1 className="teamTitle">Our team</h1>
			<div className="teamShots">
				<div className="headShots">
					<img
						src="https://images.unsplash.com/photo-1541805500-0b420aa2d99c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
						alt="headShot 1"
						className="headShotImg"
					/>
					<p>John Doe</p>
					<p>General Manager</p>
				</div>
				<div className="headShots">
					<img
						src="https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
						alt="headShot 2"
						className="headShotImg"
					/>
					<p>Jane Doe</p>
					<p>Accountant</p>
				</div>
				<div className="headShots">
					<img
						src="https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
						alt="headShot 3"
						className="headShotImg"
					/>
					<p>Jonathan Does</p>
					<p>Developer</p>
				</div>
			</div>
		</div>
	);
};

export default Team;
