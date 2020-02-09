import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

ReactDOM.render(

	<MainApp/>, document.getElementById('root'));

  //<App store={store} dispatch={store.dispatch.bind(store)} />

