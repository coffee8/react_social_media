import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/ProfileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        profileInfo: state.profilePage.profileInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        onPostChange: (text) => dispatch(onPostChangeActionCreator(text)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;