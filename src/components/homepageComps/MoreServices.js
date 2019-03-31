import React from 'react';

const MoreServices = () => {
	return (
		<div className="container2" id="moreServices">
			<img
				src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
				alt="meeting"
				className="moreServImg"
			/>

			<div className="moreServBoxes">
				<h1 className="moreServTitle">Even More Services</h1>
				<img
					src="https://image.flaticon.com/icons/svg/1373/1373010.svg"
					alt="photography"
					className="serIcon1"
				/>
				<h3>Photography</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim, commodo in sapien eget.
				</p>
				<img src="https://image.flaticon.com/icons/svg/1516/1516777.svg" alt="strategy" className="serIcon1" />
				<h3>Strategy</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim, commodo in sapien eget.
				</p>
				<img src="https://image.flaticon.com/icons/svg/148/148862.svg" alt="design" className="serIcon1" />
				<h3>Design</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim, commodo in sapien eget.
				</p>
			</div>
		</div>
	);
};

export default MoreServices;
