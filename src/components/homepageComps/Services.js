import React from 'react';

const Services = () => {
	return (
		<div className="container" id="services">
			<h1 className="serTitle">Our services</h1>
			<div className="serBoxes">
				<div className="services-box">
					<img src="https://image.flaticon.com/icons/svg/174/174249.svg" className="serIcon" alt="global" />
					<h3>Global coverage</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.</p>
				</div>
				<div className="services-box">
					<img src="https://image.flaticon.com/icons/svg/924/924514.svg" className="serIcon" alt="coffee" />
					<h3>Free coffee</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.</p>
				</div>
				<div className="services-box">
					<img src="https://image.flaticon.com/icons/svg/148/148913.svg" className="serIcon" alt="dev" />
					<h3>Development</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
