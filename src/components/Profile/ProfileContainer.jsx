import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/ProfileReducer";

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
            .then(response => {
            this.props.setProfileInfo(response.data);
        });
    }


    render() {
        return  <Profile profileInfo={this.props.profileInfo}/>
    } 
}

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

export default connect(mapStateToProps,{setProfileInfo})(ProfileContainer);
