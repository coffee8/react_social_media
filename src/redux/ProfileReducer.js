const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
        postData:
            [{message: 'hi', likeCount: 25, id: 1},
                {message: 'I am excited about react!', likeCount: 3, id: 2},
                {message: 'react is cool', likeCount: 123213, id: 3}],
        newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        const newPost = {
            id: 4,
            message: state.newPostText,
            likeCount: 0
        };
        state.postData.push(newPost);
        state.newPostText = '';

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.postText;
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, postText: text});


export default profileReducer;