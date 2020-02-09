import {applyMiddleware, combineReducers, createStore} from "redux";
import MessagesPageReducer from "./messagesPage-reducer";
import UsersPageReducer from "./UsersPage-reducers";
import ProfileReducer from "./Profile-reducers";
import authReducer from "./auth-reducers";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    messagesPage: MessagesPageReducer,
    usersPage: UsersPageReducer,
    profilePage: ProfileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;