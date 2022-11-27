import styles from './User.module.css'

const User = (props) => {

    const onToggleFollow = (userId) => {
        props.toggleFollow(userId);
    }

    return (
        <div className={styles.color}>
            <div>{props.userImage}</div>
            <div>{props.userName}</div>
            <div>{props.userCity}</div>
            <div>{props.userStatus}</div>
            <div>
                {props.followed ?
                    <button onClick={()=>onToggleFollow(props.userId)}>Unfollow</button> :
                    <button onClick={()=>onToggleFollow(props.userId)}>Follow</button>}
            </div>
        </div>
    )
}

export default User;