import styles from './Users.module.css'

const Users = (props) => {
    return (
        <div className={styles.color}>
            <div>{props.userImage}</div>
            <div>{props.userName}</div>
            <div>{props.userCity}</div>
            <div>{props.userStatus}</div>
        </div>
    )
}

export default Users;