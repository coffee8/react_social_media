import styles from './People.module.css'
import React from "react";
import axios from "axios";
import userIcon from "../../userIcon.png";

class People extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }


    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }

    onToggleFollow = (id) => {
        this.props.toggleFollow(id)
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 0; i < pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={styles.people}>
                <div>
                    {pages.map(p => {
                        return p < 10 ? <span className={this.props.currentPage === p && styles.page}>{p}</span> : ''
                    })}
                </div>
                <div >
                    {
                        this.props.users.map((data) => {
                                return <div>
                                    <div>{data.name}</div>
                                    <div>{data.status !== null ? this.props.status : 'status is empty'}</div>
                                    <div><img src={data.photos.small !== null ? data.photos.small : userIcon} alt=""/>
                                    </div>
                                    <div>
                                        {data.followed ?
                                            <button onClick={() => this.onToggleFollow(data.id)}>Unfollow</button> :
                                            <button onClick={() => this.onToggleFollow(data.id)}>Follow</button>}
                                    </div>
                                </div>
                            }
                        )
                    }
                </div>
            </div>)

    }

}

export default People;