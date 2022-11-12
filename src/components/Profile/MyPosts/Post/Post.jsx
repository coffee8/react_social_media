import style from './Post.module.css'
import profile_picture from '../../profile_picture.jpeg'
const Post = (props) => {
    return (
        <div className={style.container}>
            <img className={style.img} src={profile_picture} alt="profile photo"/>
            <div>{props.message}</div>
            <div>{`Like count: ${props.likeCount}`}</div>
        </div>
    )
}

export default Post;

