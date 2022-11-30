import People from "./People";
import {connect} from "react-redux";
import React from "react";
import {
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    toggleFollowActionCreator
} from "../../redux/PeopleReducer";
import axios from "axios";


class PeopleContainer extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }


    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }

    onToggleFollow = (id) => {
        this.props.toggleFollow(id)
    }

    onSetCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <People totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onSetCurrentPage={this.props.onSetCurrentPage}
                       onToggleFollow={this.props.onToggleFollow}
                       users={this.props.users}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);