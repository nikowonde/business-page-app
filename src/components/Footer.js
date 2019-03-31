import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-section1">
				<h2>Business Page</h2>
				<p>
					Copyright ©2019 Business Company <br />All rights reserved
				</p>
			</div>
			<div className="footer-section2">
				<h2>About Us</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius.</p>
			</div>
			<div className="footer-section3">
				<a href="http://www.facebook.com">
					<img src="https://image.flaticon.com/icons/svg/179/179319.svg" alt="fb" className="footer-icon" />
				</a>
				<a href="http://www.twitter.com">
					<img src="https://image.flaticon.com/icons/svg/179/179342.svg" alt="tw" className="footer-icon" />
				</a>
				<a href="https://www.instagram.com">
					<img src="https://image.flaticon.com/icons/svg/179/179328.svg" alt="ig" className="footer-icon" />
				</a>
				<a href="http://www.youtube.com">
					<img src="https://image.flaticon.com/icons/svg/179/179346.svg" alt="yt" className="footer-icon" />
				</a>
			</div>
			<React.Fragment>
				<iframe
					src="https://business-json.herokuapp.com/posts/"
					width="1px"
					height="1px"
					style={{ float: 'left', position: 'absolute', bottom: '0px', border: 'none' }}
				/>
			</React.Fragment>
		</div>
	);
};

export default Footer;
