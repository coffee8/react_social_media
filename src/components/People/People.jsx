import styles from './People.module.css'
import React from "react";
import axios from "axios";
import User from "./User/User";

const People = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });
    }

    const users = props.users.map((data) => <User userImage={data.photos.small}
                                           userName={data.name}
                                           userStatus={data.status}
                                           followed={data.followed}
                                           userId={data.id}
                                           toggleFollow={props.toggleFollow}
                                           setUsers={props.setUsers}/>);

    return (
        <div className={styles.people}>
            {users}
        </div>)
}

export default People;