//Trying to create my own Redux and implement Flux architecture before using Redux library

import rerenderEntireTree from "../render";

const state = {
    dialogPage: {
        dialogData: [{name: 'Ahmet', id: 1}, {name: 'Mehmet', id: 2}, {name: 'Can', id: 3}],
        messageData: [{message: 'first'}, {message: 'second'}, {message: 'third'}]
    },
    profilePage: {
        postData:
            [   {message: 'hi', likeCount: 25, id: 1},
                {message: 'I am excited about react!', likeCount: 3, id: 2},
                {message: 'react is cool', likeCount: 123213, id: 3}]
    },
}

export const addPost = (postMessage) => {
    const newPost = {
        id: 4,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}

export default state;