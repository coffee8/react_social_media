import styles from "./Header.module.css";
import headerIcon from "./../Common/fb-logo-white.png";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {auth} from "../../redux/AuthReducer";
import Navbar from "../Navbar/Navbar";

const Header = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth());
    }, [dispatch])

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__row}>
                    <div className={styles.header__logo}>
                        <img src={headerIcon} alt="logo"/>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default Header;