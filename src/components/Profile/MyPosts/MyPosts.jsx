import Post from './Post/Post';
import React from "react";
import styles from "./MyPosts.module.css"

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
        <div className={styles.posts}>
            <h4 className={styles.postHead}>My posts</h4>
            <div>
                <div>
                    <textarea placeholder="Write something!"
                              ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;