import React from 'react';
import { connect } from 'react-redux';
import deletePic from '../images/delete.png';
import Login from './Login';

import MSGS from './otherStyles/MessageStyle.module.css';

import { getPosts, deletePost, undoPost } from './actions/actualActions';

class Messages extends React.Component {
	state = {};
	componentDidMount() {
		this.props.getPosts();
	}

	render() {
		let messages;
		const undoFunc = () => {
			setTimeout(() => {
				document.getElementById('undoContainer').style.visibility = 'visible';
			}, 100);
		};

		if (this.props.posts.length > 0) {
			//console.log(this.props.posts[0]);
			//console.log(typeof this.props.posts);
		}
		let undoData;
		if (typeof this.props.undo !== null) {
			//console.log(this.props.undo);
			undoData = this.props.undo;
		}
		//console.log(typeof this.props.undo !== null);

		const dismissFunc = () => {
			document.getElementById('undoContainer').style.visibility = 'hidden';
		};
		if (typeof this.props.posts === 'object' && this.props.posts.length > 0) {
			messages = this.props.posts[0].map((msg) => (
				<tbody className={MSGS.messageBody} key={msg.id}>
					<tr>
						<td className={MSGS.tableTd}>{msg.subject}</td>
						<td className={MSGS.tableTd}>{msg.sender}</td>
						<td className={MSGS.tableTd}>{msg.email}</td>
						<td className={MSGS.tableTd}>{msg.id}</td>
						<td className={MSGS.message}>{msg.message}</td>
						<td
							onClick={(e) => {
								this.props.deletePost(msg.id);
								undoFunc();
							}}
							style={{ background: 'gray', cursor: 'pointer' }}
							className={MSGS.deleteButton}
						>
							<span className={MSGS.tooltiptext}>Delete message</span>
							<img
								src={deletePic}
								alt="deleteBtn"
								style={{
									maxWidth: '20px',
									background: 'gray',
									pointerEvents: 'none',
									userSelect: 'none'
								}}
							/>
						</td>
					</tr>
				</tbody>
			));
		}
		return (
			<div>
				<span className={MSGS.undoContainer} id="undoContainer">
					<p>Do you want to undo that?</p>
					<button
						className={MSGS.undoButton}
						style={{ background: 'green' }}
						onClick={(e) => {
							this.props.undoPost(undoData);
							dismissFunc();
							setTimeout(() => {
								document.location.reload(true);
							}, 500);
						}}
					>
						UNDO
					</button>
					<button className={MSGS.undoButton} style={{ background: 'red' }} onClick={dismissFunc}>
						DISMISS
					</button>
				</span>
				<table className={MSGS.messageContainer}>
					<thead>
						<tr>
							<th>Subject</th>
							<th>Sender</th>
							<th>Email</th>
							<th>Id</th>
							<th className={MSGS.msgHead}>Message</th>
						</tr>
					</thead>
					{messages}
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		//messages: state.messages,
		undo: state.deletedItem,
		posts: state.posts
	};
};

/*const mapDispatchToprops = (dispatch) => {
	return {
		deleteMessage: (msg) => dispatch({ type: 'DELETE_MESSAGE', msg: msg }),
		undoMessage: () => dispatch({ type: 'UNDO_MESSAGE' })
	};
};*/

export default connect(mapStateToProps, { getPosts, deletePost, undoPost })(Messages);
