import style from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <div>
                <div>
                    <textarea name="post" id="1" cols="15" rows="3" placeholder="your text"></textarea>
                </div>
                <button>Add post</button>
            </div>
            <Post message = 'hi' likeCount = '25'/>
            <Post message = 'I am exited about react' likeCount = '3'/>
            <Post message = 'jsx' likeCount = '15'/>
        </div>
    )
}

export default MyPosts;