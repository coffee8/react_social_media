import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.item}>
                <NavLink
                    className={navData => navData.isActive ? style.activeStyle : style.link} to="/profile">
                    Profile
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.activeStyle : style.link} to="/dialogs">
                    Dialogs
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.activeStyle : style.link} to="/people">
                    People
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.activeStyle : style.link} to="/news">
                    News
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.activeStyle : style.link} to="/music">
                    Music
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink className={navData => navData.isActive ? style.activeStyle : style.link} to="/settings">
                    Settings
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;