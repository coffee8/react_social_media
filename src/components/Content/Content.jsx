import Navbar from "../Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import styles from './Content.module.css';
import PeopleContainer from "../People/PeopleContainer";
import ProfileContainerWithHooks from "../Profile/ProfileContainerWithHooks";
import Login from "../Login/Login";

const Content = () => {
    return (
        <div className={styles.content}>
            <Navbar/>
            <Routes className="app-wrapper-content">
                <Route path='/profile/'>
                    <Route index element={<ProfileContainerWithHooks/>}/>
                    <Route path='/profile/:userId'
                           element={<ProfileContainerWithHooks/>}/>
                </Route>
                <Route path='/dialogs/*'
                       element={<DialogsContainer/>}/>
                <Route path='/people/*'
                       element={<PeopleContainer/>}/>
                <Route path={'/login/*'}
                       element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default Content;