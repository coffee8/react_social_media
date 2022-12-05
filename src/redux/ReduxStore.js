import {combineReducers} from "redux";
import {legacy_createStore as createStore} from 'redux';
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import peopleReducer from "./PeopleReducer";

const reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    peoplePage: peopleReducer,
});


const store = createStore(reducers);

window.store = store;

export default store;