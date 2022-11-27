import styles from './People.module.css'
import React from "react";
import User from "./User/User";

const People = (props) => {

    const onToggleFollow = (userId) => {
        props.toggleFollow(userId);
    }

    const users = props.usersData.map((data) => <User userImage={data.userImage}
                                                       userName={data.userName}
                                                       userCity={data.userCity}
                                                       userStatus={data.userStatus}
                                                       followed={data.followed}
                                                       userId={data.userId}
                                                       toggleFollow={props.toggleFollow}
                                                       setUsers={props.setUsers}/>);

    return (
        <div className={styles.people}>
            {/*{*/}
            {/*    props.usersData.map((data) => <div>*/}
            {/*        <div>{data.userImage}</div>*/}
            {/*        <div>{data.userName}</div>*/}
            {/*        <div>{data.userCity}</div>*/}
            {/*        <div>{data.userStatus}</div>*/}
            {/*        <div>*/}
            {/*            {data.followed ? <button onClick={() => onToggleFollow(data.userId)}>Unfollow</button> :*/}
            {/*                <button onClick={() => onToggleFollow(data.userId)}>Follow</button>}*/}
            {/*        </div>*/}
            {/*    </div>)*/}
            {/*}*/}
            {users}
        </div>)
}

export default People;