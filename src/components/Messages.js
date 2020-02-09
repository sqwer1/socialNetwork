import React from 'react';
import classes from '../App.module.css';
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, requiredField} from "../utils/validators/validators";
import {Textarea} from "./Common/FormControl/FormControl";

const User_item = (props) => (
	<div>
		<NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
	</div>
);

const User_dialog = (props) => (
	<div className={classes.dialog}>{props.message}</div>
);
	
const Messages = (props) => {
	let dialogsElements = props.dialogsData.map ( dialog => <User_item key={dialog.id} name={dialog.name} id={dialog.id}/>);
	let post = props.posts.map ( posts => <User_dialog key={posts.id} message={posts.message} id={posts.id}/>);
	let messageId = Math.max(...props.posts.map(p => p.id)) + 1;
	let addNewMessage = (values) => {
		props.addMessage(values.newMessageText, messageId);
	}

	return (
	<div className={classes.Messages}>
		<div className={classes.Messages_user}>
			{dialogsElements}
		</div>
		<div className={classes.dialogs}>
			{post}
		</div>
		<MessagesReduxForm onSubmit={addNewMessage}/>
	</div>
	);
}

const maxLenght10 = maxLenghtCreator(10);

const MessagesForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea} name={"newMessageText"} validate={[requiredField, maxLenght10]}/>
			<button>сообщение</button>
		</form>
	)
}

const MessagesReduxForm = reduxForm({form: 'message'}) (MessagesForm)

export default Messages;