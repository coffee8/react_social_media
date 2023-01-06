import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../redux/ProfileReducer";
import {useNavigate, useParams} from "react-router-dom";

const ProfileContainerWithHooks = (props) => {

    const profileInfo = useSelector(store => store.profilePage.profileInfo);
    const isAuth = useSelector(store => store.auth.isAuth);
    const dispatch = useDispatch();
    let {userId} = useParams();
    const navigate = useNavigate();

    if(!userId) {
        userId = 2;
    }

    useEffect(() => {

        if(isAuth === false) {
            navigate('/login');
        }
        dispatch(getProfile(userId));

    }, [userId, isAuth, navigate, dispatch]);

    return <Profile profileInfo={profileInfo}/>

}

export default ProfileContainerWithHooks;
