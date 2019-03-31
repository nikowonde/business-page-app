import React, { Component } from 'react';

export default class Skills extends Component {
	render() {
		return (
			<div className="container2" id="skills">
				<h1 className="skillsTitle">Our skills</h1>
				<p className="skillsDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet.</p>
				<div className="skillElms">
					<div>
						<p className="skillsElmTitle">Design</p>
						<p className="skillsPerc" id="skillsPerc1">
							75%
						</p>
						<div className="skillBar-bottom">
							<div className="skillBar-color1" id="skillBar1" />
						</div>
					</div>
					<div>
						<p className="skillsElmTitle">Development</p>
						<p className="skillsPerc" id="skillsPerc2">
							60%
						</p>
						<div className="skillBar-bottom">
							<div className="skillBar-color2" id="skillBar2" />
						</div>
					</div>
					<div>
						<p className="skillsElmTitle">Photography</p>
						<p className="skillsPerc" id="skillsPerc3">
							90%
						</p>
						<div className="skillBar-bottom">
							<div className="skillBar-color3" id="skillBar3" />
						</div>
					</div>
				</div>
				<img
					src="https://images.unsplash.com/photo-1500067803284-4304564c8655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
					alt="skills"
					className="skillsImg"
				/>
			</div>
		);
	}
}
