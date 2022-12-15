import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setProfileInfo} from "../../redux/ProfileReducer";
import {useParams} from "react-router-dom";

const ProfileContainerWithHooks = (props) => {

    const profileInfo = useSelector(store => store.profilePage.profileInfo);
    const dispatch = useDispatch();
    let {userId} = useParams();

    if(!userId) {
        userId = 2;
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                dispatch(setProfileInfo(response.data));
            });
    }, [userId]);

    return <Profile profileInfo={profileInfo}/>

}

export default ProfileContainerWithHooks;
