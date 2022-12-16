import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../redux/ProfileReducer";
import {useParams} from "react-router-dom";

const ProfileContainerWithHooks = (props) => {

    const profileInfo = useSelector(store => store.profilePage.profileInfo);
    const dispatch = useDispatch();
    let {userId} = useParams();

    if(!userId) {
        userId = 2;
    }

    useEffect(() => {
        dispatch(getProfile(userId));
    }, [userId]);

    return <Profile profileInfo={profileInfo}/>

}

export default ProfileContainerWithHooks;
