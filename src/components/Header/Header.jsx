import style from './Header.module.css'
import headerIcon from './fb_logo.png'
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {auth, logout} from "../../redux/AuthReducer";

const Header = () => {

    const authData = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        // usersAPI.auth().then(data => {
        //     if (data.resultCode === 0)
        //         dispatch(setAuthUserData(data.data))
        // })
        dispatch(auth());
    }, [dispatch])

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <div className={style.header}>
            <div className={style.login}>
                {authData.isAuth ?
                    <>{authData.login} <button onClick={onLogout}>Logout</button> </>
                    : <NavLink to={'/login'}><button>Login</button></NavLink>}
            </div>
            <div>
                <img className={style.img} src={headerIcon} alt="logo"/>
            </div>
        </div>
    )
}

export default Header;