import React from 'react';
import { connect } from 'react-redux';

const ThankYou = (props) => {
	let cont1 = document.getElementById('cont1');
	if (props.status) {
		cont1.style.animationName = 'popup';
		setTimeout(() => {
			cont1.style.top = '9%';
			cont1.style.animationName = 'fadeOut';
		}, 5000);
		cont1.style.top = '-10%';
		setTimeout(() => {
			props.statusChanger();
		}, 10000);
	}
	return (
		<div className="thankContainer" id="cont1">
			<h4 className="thankText">
				Thank you, <br /> {props.person}, <br /> for the message!
			</h4>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		person: state.sender,
		status: state.status
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		statusChanger: () => dispatch({ type: 'SET_STATUS' })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
