import style from "./Post.module.css";
import profilePhoto from "../../../Common/profile_photo3.jpeg";

const Post = (props) => {
    return (
        <div className={style.postsContainer}>
            <div className={style.userProfile}>
                <img src={profilePhoto} alt="profile photo" />
                <p>Sarah K</p>
            </div>
            <p className={style.postText}>{props.message}</p>
        </div>
    )
}

export default Post;

