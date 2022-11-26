import Users from "./Users/Users";
import styles from './People.module.css'
import React from "react";

const People = (props) => {

    const users = props.usersData.map(data => <Users
        userImage={data.userImage}
        userName={data.userName}
        userCity={data.userCity}
        userStatus={data.userStatus}/>)

    return (
        <div className={styles.people}>
            {users}
        </div>
    )
}

export default People;