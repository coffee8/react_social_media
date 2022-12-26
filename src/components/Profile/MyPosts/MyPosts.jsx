import Post from './Post/Post';
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
        // <div className={styles.posts}>
        //     <h4 className={styles.postHead}>My posts</h4>
        //     <div>
        //         <div>
        //             <textarea placeholder="Write something!"
        //                       ref={newPostElement}
        //                       onChange={onPostChange}
        //                       value={props.newPostText}/>
        //         </div>
        //         <div>
        //             <button onClick={onAddPost}>Add post</button>
        //         </div>
        //
        //     </div>
        //     <div>
        //         {posts}
        //     </div>
        // </div>

    <div className={styles.main__postcontainer}>
        <div className={styles.main__userprofile}>
            <img src={profilePhoto} alt=""/>
            <p>My name</p>
        </div>
        <div className={styles.main__postinputcontainer}>
            <textarea placeholder="Say!" rows="2"></textarea>
            <button><img src={sendIcon} alt=""/></button>
        </div>

        {posts}

    </div>
    )
}

export default MyPosts;