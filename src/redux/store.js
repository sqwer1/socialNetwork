import MessagesPageReducer from "./messagesPage-reducer";

let store = {
	_state: {
messagesPage:{
	dialogsData: [
	{id: 1, name: 'Вася'},
	{id: 2, name: 'Петя'},
	{id: 3, name: 'Леша'},
	{id: 4, name: 'Гена'}
],
	posts: [
	{message: 'hi'},
	{message: 'privet'},
	{message: 'sukka'},
	{message: 'olle'}
],
	newMessageText: 'sdsadasdsad'	
	}},
	getState() {
		return this._state;
	},
	rerenderEntireTree() {},
	subscribe(observer) {
		this.rerenderEntireTree = observer;
	},
	dispatch(action) {

		this._state.messagesPage = MessagesPageReducer(this._state.messagesPage, action)
		this.rerenderEntireTree(this._state);
	}
}

export default store;
