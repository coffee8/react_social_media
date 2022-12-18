import style from './Post.module.css'
import profile_picture from '../../../Common/avatar-icon.png'

const Post = (props) => {
    return (
        <div className={style.container}>
            <img className={style.img}
                 src={profile_picture}
                 alt="profile photo"/>
            <div><span>{props.message}</span></div>
            <div><span>{`Like count: ${props.likeCount}`}</span></div>
        </div>
    )
}

export default Post;

