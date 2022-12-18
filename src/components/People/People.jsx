import styles from './People.module.css'
import React from "react";
import userIcon from "../../userIcon.png";
import {NavLink} from "react-router-dom";

const  People = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return p < 21 ? <span className={props.currentPage === p && styles.page}
                                          onClick={() => props.onSetCurrentPage(p)}>{p}</span> : ''
                })}
            </div>
            <div>
                {
                    props.users.map((data) => {
                            return <div className={styles.container}>
                                <NavLink to={'./../profile/' + data.id}>
                                    <div>
                                        <img src={data.photos.large !== null ? data.photos.large : userIcon} alt=""/>
                                    </div>
                                </NavLink>
                                <div>
                                    <p>{data.name}</p>
                                </div>
                                <div>
                                    <p>{data.status !== null ? props.status : 'status is empty'}</p>
                                </div>
                                <div>
                                    {data.followed ?
                                        <button
                                                onClick={() => {
                                                    props.onToggleFollow(data.id)
                                                }
                                                }>Unfollow</button> :
                                        <button
                                                onClick={() => {
                                                    props.onToggleFollow(data.id)
                                                }
                                                }>Follow</button>}
                                </div>
                            </div>
                        }
                    )
                }
            </div>
        </div>)


}

export default People;