const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {

    if (action.type === ADD_POST) {
        const newPost = {
            id: 4,
            message: state.newPostText,
            likeCount: 0
        }
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