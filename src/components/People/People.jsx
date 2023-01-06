import styles from "./People.module.css";
import React from "react";
import userIcon from "../Common/blank-profile-photo.png";
import {NavLink} from "react-router-dom";

const People = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={styles.page}>
                {pages.map(p => {
                    return p < 21 ? <span className={props.currentPage === p && styles.selectedPage}
                                          onClick={() => props.onSetCurrentPage(p)}>{p}</span> : ''
                })}
            </div>
            <div>
                {
                    props.users.map((data) => {
                            return <div className={styles.peopleColumnRow}>
                                <div className={styles.peopleColumn}>
                                    <div className={styles.peopleRow}>
                                        <NavLink to={'./../profile/' + data.id} className={styles.peopleImage}>
                                            <div>
                                                <img src={data.photos.large !== null ? data.photos.large : userIcon}
                                                     alt=""/>
                                            </div>
                                        </NavLink>
                                        <div className={styles.peopleBody}>
                                            <p className={styles.name}>{data.name}</p>
                                            <p className={styles.status}>{data.status !== null ? props.status : 'Hey Hi'}</p>
                                            <div className={styles.btn}>
                                                {data.followed ?
                                                    <button className={styles.button}
                                                            onClick={() => {
                                                                props.onToggleFollow(data.id)
                                                            }
                                                            }>Unfollow</button> :
                                                    <button className={styles.button}
                                                            onClick={() => {
                                                                props.onToggleFollow(data.id)
                                                            }
                                                            }>Follow</button>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    )
                }
            </div>
        </div>)


}

export default People;