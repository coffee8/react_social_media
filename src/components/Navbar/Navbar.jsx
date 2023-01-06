import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/AuthReducer";


const Navbar = () => {

    const authData = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <div className={style.nav}>
            <NavLink className={navData => navData.isActive ? style.activeLink : style.link}
                     to={"/profile"}>
                Profile
            </NavLink>
            <NavLink className={navData => navData.isActive ? style.activeLink : style.link}
                     to={"/people"}>
                People
            </NavLink>
            <NavLink className={navData => navData.isActive ? style.activeLink : style.link}
                     to={"/dialogs"}>
                Dialogs
            </NavLink>
            <div className={style.login}>
                {authData.isAuth ?
                    <span className={style.userName}>{authData.login}
                        <button onClick={onLogout} className={style.button}>Logout</button>
                    </span>
                    : <NavLink to={"/login"}>
                        <button className={style.button}>Login</button>
                    </NavLink>}
            </div>
        </div>
    )
}

export default Navbar;