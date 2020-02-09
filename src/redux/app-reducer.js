import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducers";

const INITIALAZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALAZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default: return state;
    }
}
export const initializedSuccess = () => ({
    type: INITIALAZED_SUCCESS
})
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;