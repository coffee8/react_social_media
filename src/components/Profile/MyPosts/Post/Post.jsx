import styles from "./Post.module.css";
import profilePhoto from "../../../Common/profile_photo3.jpeg";

const Post = (props) => {
    return (
        <div className={styles.main__postscontainer}>
            <div className={styles.main__userprofile}>
                <img src={profilePhoto} alt="" />
                <p>Sarah K</p>
            </div>
            <p className={styles.main__posttext}>{props.message}</p>
        </div>
    )
}

export default Post;

