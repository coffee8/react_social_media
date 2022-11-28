import styles from './User.module.css'
import userIcon from './../../../userIcon.png'
import React from 'react'

class User extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    onToggleFollow = (userId) => {
        this.props.toggleFollow(userId);
    }

    render() {
        return (<div className={styles.user}>
            <div></div>
            <div>{this.props.userName}</div>
            <div>{this.props.userStatus !== null ? this.props.userStatus : 'status is empty'}</div>
            <div><img src={this.props.userImage !== null ? this.props.userImage : userIcon} alt=""/></div>
            <div>
                {this.props.followed ?
                    <button onClick={() => this.onToggleFollow(this.props.userId)}>Unfollow</button> :
                    <button onClick={() => this.onToggleFollow(this.props.userId)}>Follow</button>}
            </div>
        </div>);
    }
}

export default User;