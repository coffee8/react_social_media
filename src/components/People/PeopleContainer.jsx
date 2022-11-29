import People from "./People";
import {connect} from "react-redux";
import React from "react";
import {
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    toggleFollowActionCreator
} from "../../redux/PeopleReducer";


const mapStateToProps = (state) => {
    return {
        users: state.peoplePage.users,
        pageSize: state.peoplePage.pageSize,
        totalUsersCount: state.peoplePage.totalUsersCount,
        currentPage: state.peoplePage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => dispatch(toggleFollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage)),
        setTotalUsersCount: (totalUsers) => dispatch(setTotalUsersCountActionCreator(totalUsers))
    }
}

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;