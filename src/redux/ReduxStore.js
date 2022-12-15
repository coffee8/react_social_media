import {applyMiddleware, combineReducers} from "redux";
import {legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import peopleReducer from "./PeopleReducer";
import authReducer from "./AuthReducer";


const reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    peoplePage: peopleReducer,
    auth: authReducer
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;