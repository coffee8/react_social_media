import People from "./People";
import {connect} from "react-redux";
import React from "react";


const mapStateToProps = (state) => {
    return {
        usersData: state.peoplePage.usersData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}


const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;