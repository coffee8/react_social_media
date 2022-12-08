import style from './Header.module.css'
import headerIcon from './fb_logo.png'
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setAuthUserData} from "../../redux/AuthReducer";

const Header = () => {

    const authData = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true})
            .then(response => {
                if (response.data.data.resultCode === 0)
                    dispatch(setAuthUserData(response.data.data))
            })
    }, [dispatch])

    return (
        <div className={style.header}>
            <div className={style.login}>
                {authData.isAuth ? authData.login : <NavLink to={'/login'}>Log in</NavLink>}
            </div>
            <div>
                <img className={style.img} src={headerIcon} alt="logo"/>
            </div>
        </div>
    )
}

export default Header;