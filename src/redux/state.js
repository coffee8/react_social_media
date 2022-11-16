//Trying to create my own Redux and implement Flux architecture before using Redux library

const store = {
    _state: {
        dialogPage: {
            dialogData: [{name: 'Ahmet', id: 1}, {name: 'Mehmet', id: 2}, {name: 'Can', id: 3}],
            messageData: [{message: 'first'}, {message: 'second'}, {message: 'third'}]
        },
        profilePage: {
            postData:
                [{message: 'hi', likeCount: 25, id: 1},
                    {message: 'I am excited about react!', likeCount: 3, id: 2},
                    {message: 'react is cool', likeCount: 123213, id: 3}],
            newPostText: '',
        },
    },

    _callSubscriber() {},

    getState() {
        return this._state;
    },

    addPost() {
        const newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(postText) {
        this._state.profilePage.newPostText = postText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}


export default store;