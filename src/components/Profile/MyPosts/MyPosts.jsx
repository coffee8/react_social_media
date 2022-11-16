import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

    const newPostElement = React.createRef(); //not recommended to use

    const addPost = () => {
        const text = newPostElement.current.value;
        alert(text);
    }
    const posts = props.postData.map(data => <Post message={data.message} likeCount={data.likeCount}/>)

    return (
        <div>
            <div>My posts</div>
            <div>
                <div>
                    <textarea name="post" id="1"
                              cols="15" rows="3"
                              placeholder="your text"
                              ref={ newPostElement }></textarea>
                </div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;