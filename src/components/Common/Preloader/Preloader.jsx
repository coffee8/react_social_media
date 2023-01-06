import loadingLogo from "../../../loading_logo.svg";
import React from "react";
import styles from "./Preloader.module.css";

const Preloader = () => {
    return (
        <div><img className={styles.img} src={loadingLogo}/></div>
    )
}

export default Preloader;