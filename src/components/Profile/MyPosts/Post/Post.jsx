import styles from './Post.module.css'
import profilePhoto from "../../../Common/profile_photo3.jpeg";

const Post = (props) => {
    return (
        // <div className={style.container}>
        //     <img className={style.img}
        //          src={profilePicture}
        //          alt="profile photo"/>
        //     <div><span>{props.message}</span></div>
        //     <div><span>{`Like count: ${props.likeCount}`}</span></div>
        // </div>

        <div className={styles.main__postscontainer}>
            <div className={styles.main__userprofile}>
                <img src={profilePhoto} alt="" />
                <p>My name</p>
            </div>
            <p className={styles.main__posttext}>Lorem consectetur adipisicing
                elit.
                Deserunt dolorum delectus placeat ducimus rem iusto fugiat
                vel cumque debitis impedit.</p>
        </div>
    )
}

export default Post;

