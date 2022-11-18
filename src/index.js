import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/ReduxStore";
import ReactDOM from "react-dom/client";
import App from "./App";
import {onUpdateMessageTextActionCreator, sendMessageActionCreator} from "./redux/DialogReducer";
import {addPostActionCreator, onPostChangeActionCreator} from "./redux/ProfileReducer";

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 addPostActionCreator={addPostActionCreator}
                 onPostChangeActionCreator={onPostChangeActionCreator}
                 sendMessageActionCreator={sendMessageActionCreator}
                 onUpdateMessageTextActionCreator={onUpdateMessageTextActionCreator}
            />
        </React.StrictMode>
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState();
    renderEntireTree(state);
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
