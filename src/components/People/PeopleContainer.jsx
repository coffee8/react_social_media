import People from "./People";
import {connect} from "react-redux";
import React from "react";
import {setUsersActionCreator, toggleFollowActionCreator} from "../../redux/PeopleReducer";


const mapStateToProps = (state) => {
    return {
        users: state.peoplePage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => dispatch(toggleFollowActionCreator(userId)),
        setUsers: (users) => dispatch(setUsersActionCreator(users))
    }
}

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;