import React from "react";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    const addPost = () => {
        props.dispatch(props.addPostActionCreator());
    }

    const onPostChange = (text) => {
        props.dispatch(props.onPostChangeActionCreator(text));
    }

    return (
        <MyPosts postData={props.postData}
                 newPostText={props.newPostText}
                 addPost={addPost}
                 onPostChange={onPostChange}/>
    )
}

export default MyPostsContainer;