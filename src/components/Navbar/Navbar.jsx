import styles from "./Navbar.module.css";
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
        <div className={styles.header__nav}>
            <NavLink className={navData => navData.isActive ? styles.activeLink : styles.link}
                     to={"/profile"}>
                Profile
            </NavLink>
            <NavLink className={navData => navData.isActive ? styles.activeLink : styles.link}
                     to={"/people"}>
                People
            </NavLink>
            <NavLink className={navData => navData.isActive ? styles.activeLink : styles.link}
                     to={"/dialogs"}>
                Dialogs
            </NavLink>
            <div>
                {authData.isAuth ?
                    <>{authData.login}
                        <button onClick={onLogout} className={styles.button}>Logout</button>
                    </>
                    : <NavLink to={"/login"}>
                        <button className={styles.button}> Login</button>
                    </NavLink>}
            </div>
        </div>
    )
}

export default Navbar;