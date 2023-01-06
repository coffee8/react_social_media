import Post from "./Post/Post";
import React from "react";
import styles from "./MyPosts.module.css"
import profilePhoto from "../../Common/profile_photo3.jpeg";
import sendIcon from "../../Common/send_icon.png";

const MyPosts = (props) => {

    const newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.onPostChange(text);
    }

    const posts = props.postData.map(data => <Post message={data.message}
                                                   likeCount={data.likeCount}
                                                   key={data.id}/>)

    return (
    <div className={styles.postContainer}>
        <div className={styles.userProfile}>
            <img src={profilePhoto} alt="profile photo"/>
            <p>{"Sarah K"}</p>
        </div>
        <div className={styles.postInputContainer}>
            <textarea placeholder={`   Say something!`}
                      rows="2"
                      ref={newPostElement}
                      onChange={onPostChange}
                      value={props.newPostText}></textarea>
            <button onClick={onAddPost}><img src={sendIcon} alt=""/></button>
        </div>
        {posts}
    </div>
    )
}

export default MyPosts;