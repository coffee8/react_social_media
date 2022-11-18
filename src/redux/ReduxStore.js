import {combineReducers} from "redux";
import {legacy_createStore as createStore} from 'redux';
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";

const reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
});


const store = createStore(reducers);

export default store;