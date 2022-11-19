import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
    const newPostElement = React.createRef(); //not recommended to use

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
        <div>
            <div>My posts</div>
            <div>
                <div>
                    <textarea placeholder="your text"
                              ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;