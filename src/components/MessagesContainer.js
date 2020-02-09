import React from 'react';
import {addMessageActionCreator} from '../redux/messagesPage-reducer.js';
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
	return {
		dialogsData: state.messagesPage.dialogsData,
		posts: state.messagesPage.posts,
		newMessageText: state.messagesPage.newMessageText
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (newMessageText, messageId) => {
			dispatch(addMessageActionCreator(newMessageText, messageId));
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Messages);
