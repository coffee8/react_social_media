import style from './Post.module.css'
import profilePicture from '../../../Common/avatar-icon.png'

const Post = (props) => {
    return (
        <div className={style.container}>
            <img className={style.img}
                 src={profilePicture}
                 alt="profile photo"/>
            <div><span>{props.message}</span></div>
            <div><span>{`Like count: ${props.likeCount}`}</span></div>
        </div>
    )
}

export default Post;

