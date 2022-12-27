import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import styles from "./Content.module.css";
import PeopleContainer from "../People/PeopleContainer";
import ProfileContainerWithHooks from "../Profile/ProfileContainerWithHooks";
import Login from "../Login/Login";

const Content = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.main__column}>
                    <Routes>
                        <Route path="/profile/">
                            <Route index element={<ProfileContainerWithHooks/>}/>
                            <Route path="/profile/:userId" element={<ProfileContainerWithHooks/>}/>
                        </Route>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}></Route>
                        <Route path="/people/*" element={<PeopleContainer/>}></Route>
                        <Route path="/login/*" element={<Login/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Content;