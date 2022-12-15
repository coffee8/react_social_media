import People from "./People";
import {connect} from "react-redux";
import React from "react";
import {
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    toggleFollow, toggleFollowingProgress,
    getUsers
} from "../../redux/PeopleReducer";
import Preloader from "../Common/Preloader/Preloader";
import styles from "./People.module.css"

class PeopleContainer extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onToggleFollow = (id) => {
        this.props.toggleFollow(id)
    }

    onSetCurrentPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getPage(pageNumber, this.props.pageSize).then(response => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items);
        //
        // });
    }

    render() {
        return <>   {this.props.isFetching ? <Preloader/> : null}
            <People className={styles.people}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onSetCurrentPage={this.onSetCurrentPage}
                    onToggleFollow={this.onToggleFollow}
                    users={this.props.users}
                    followingProgress={this.props.followingProgress}
                    toggleFollowingProgress={this.toggleFollowingProgress}
                    isFetching={this.props.isFetching}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.peoplePage.users,
        pageSize: state.peoplePage.pageSize,
        totalUsersCount: state.peoplePage.totalUsersCount,
        currentPage: state.peoplePage.currentPage,
        isFetching: state.peoplePage.isFetching,
        followingProgress: state.peoplePage.followingProgress
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollow: (userId) => dispatch(toggleFollowActionCreator(userId)),
//         setUsers: (users) => dispatch(setUsersActionCreator(users)),
//         setCurrentPage: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage)),
//         setTotalUsersCount: (totalUsers) => dispatch(setTotalUsersCountActionCreator(totalUsers)),
//         toggleIsFetching: (isFetching) => dispatch(toggleFetchingActionCreator(isFetching))
//     }
// }

export default connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers
})(PeopleContainer);