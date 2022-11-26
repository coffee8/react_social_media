import Navbar from "../Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";
import DialogsContainer from "../Dialogs/DialogsContainer";
import styles from './Content.module.css';

const Content = () => {
    return (
        <div className={styles.content}>
            <Navbar/>
            <Routes className="app-wrapper-content">
                <Route path='/profile/*'
                       element={<Profile/>}/>
                <Route path='/dialogs/*'
                       element={<DialogsContainer/>}/>
            </Routes>
        </div>
    )
}

export default Content;