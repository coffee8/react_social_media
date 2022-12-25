import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

const initialState = {
    postData:
        [{message: 'I am excited about React!', likeCount: 3, id: 1}],
    newPostText: '',
    profileInfo: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 4,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.postText
            };
        }

        case SET_PROFILE_INFO: {
            return {
                ...state,
                profileInfo: action.profileInfo
            };
        }
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, postText: text});
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo});

export const getProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => dispatch(setProfileInfo(response.data)))
}

export default profileReducer;