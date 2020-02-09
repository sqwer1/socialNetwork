import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import {BrowserRouter, Route} from 'react-router-dom';
import {addMessage} from './redux/store.js';
import {changeNewMessageText} from './redux/store.js';

export let rerenderEntireTree = (state) => {
ReactDOM.render(

	<BrowserRouter>
		<App appState={state} addMessage={addMessage} changeNewMessageText={changeNewMessageText}/>
	</BrowserRouter>, document.getElementById('root'));

}

