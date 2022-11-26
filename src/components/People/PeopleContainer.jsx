import People from "./People";
import {connect} from "react-redux";
import React from "react";
import {setUsersActionCreator, toggleFollowActionCreator} from "../../redux/PeopleReducer";


const mapStateToProps = (state) => {
    return {
        usersData: state.peoplePage.usersData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => dispatch(toggleFollowActionCreator(userId)),
        setUsers: () => dispatch(setUsersActionCreator())
    }
}

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;