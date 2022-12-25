import style from './Header.module.css'
import headerIcon from './../Common/fb-logo-white.png'
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
        // <div className={style.header}>
        //     <div className={style.login}>
        //         {authData.isAuth ?
        //             <>{authData.login}
        //                 <button onClick={onLogout} className={style.button}> Logout </button>
        //             </>
        //             : <NavLink to={'/login'}>
        //                 <button className={style.button}> Login </button>
        //             </NavLink>}
        //     </div>
        //     <div>
        //         <img className={style.img} src={headerIcon} alt="logo"/>
        //     </div>
        // </div>

    <div className={style.header}>
        <div className={style.container}>
            <div className={style.header__row}>
                <div className={style.header__logo}>
                    <img src={headerIcon} alt="logo"/>
                </div>
                <div className={style.header__nav}>
                    <a href="">Profile</a>
                    <a href="">People</a>
                    <a href="">Dialogs</a>
                    <a href="">Login</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;