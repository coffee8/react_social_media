import Navbar from "../Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import styles from './Content.module.css';
import PeopleContainer from "../People/PeopleContainer";
import ProfileContainer from "../Profile/ProfileContainer";

const Content = () => {
    return (
        <div className={styles.content}>
            <Navbar/>
            <Routes className="app-wrapper-content">
                <Route path='/profile/*'
                       element={<ProfileContainer/>}/>
                <Route path='/dialogs/*'
                       element={<DialogsContainer/>}/>
                <Route path='/people/*'
                       element={<PeopleContainer/>}/>
            </Routes>
        </div>
    )
}

export default Content;