import Post from './Post/Post';

const MyPosts = (props) => {

    const posts = props.postData.map(data => <Post message={data.message} likeCount={data.likeCount}/>)

    return (
        <div>
            <div>My posts</div>
            <div>
                <div>
                    <textarea name="post" id="1" cols="15" rows="3" placeholder="your text"></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;