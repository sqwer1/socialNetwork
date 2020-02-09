import React from 'react';
import classes from './App.module.css';
import Menu from './Menu.js';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import UsersContainer from "./components/UsersContainer";
import HeaderContainer from "./components/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withLazySuspense} from "./HOC/withLazySuspense";

const MessagesContainer = React.lazy(() => import('./components/MessagesContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends React.Component {
	catchAllUnhandledErrors = (promiseRejectionEvent) => {
		alert("Some error occured");
		console.error(promiseRejectionEvent);
	}
	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}
	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}
		return (
			<div className={classes.App}>

				<HeaderContainer/>
				<div className={classes.Authorization}>
					<Switch>
						<Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
						<Route path='/profile/:userId?' render={withLazySuspense(ProfileContainer)}/>
						<Route path='/messages' render={withLazySuspense(MessagesContainer)}/>
						<Route path='/users' render={() => <UsersContainer/>}/>
						<Route path='/login' render={() => <LoginPage/>}/>
						<Route path='*' render={() => <div>404 not found</div>}/>
					</Switch>
				</div>
				<div>
					<Menu name='Профиль' track='/profile'/>
					<Menu name='Сообщения' track='/messages'/>
					<Menu name='Пользователи' track='/users'/>
					<Menu name='Настройки' track='/settings'/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

//export default compose(
//	connect (mapStateToProps, {initializeApp}),
//	withRouter
//)(App);

let AppContainer = compose(
	connect (mapStateToProps, {initializeApp}),
	withRouter
)(App);

const MainApp = (props) => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
}

export default MainApp;