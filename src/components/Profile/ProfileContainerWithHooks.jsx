import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setProfileInfo} from "../../redux/ProfileReducer";

const ProfileContainerWithHooks = (props) => {

    const profileInfo = useSelector(store => store.profilePage.profileInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
            .then(response => {
                dispatch(setProfileInfo(response.data));
            });
    }, [dispatch]);

    return <Profile profileInfo={profileInfo}/>

}

export default ProfileContainerWithHooks;
