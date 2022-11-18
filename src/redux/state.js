//Trying to create my own Redux and implement Flux architecture before using Redux library

import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";

const store = {
    _state: {
        dialogPage: {
            dialogData: [
                {name: 'Ahmet', id: 1},
                {name: 'Mehmet', id: 2},
                {name: 'Can', id: 3}],
            messageData: [
                {message: 'first', id: 1},
                {message: 'second', id: 2},
                {message: 'third', id: 3}],
            newMessageText: '',
        },
        profilePage: {
            postData:
                [{message: 'hi', likeCount: 25, id: 1},
                    {message: 'I am excited about react!', likeCount: 3, id: 2},
                    {message: 'react is cool', likeCount: 123213, id: 3}],
            newPostText: '',
        },
    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;