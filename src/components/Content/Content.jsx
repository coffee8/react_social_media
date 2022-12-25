import Navbar from "../Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import styles from './Content.module.css';
import PeopleContainer from "../People/PeopleContainer";
import ProfileContainerWithHooks from "../Profile/ProfileContainerWithHooks";
import Login from "../Login/Login";
import profilePhoto from "../Common/profile_photo3.jpeg";
import sendIcon from "../Common/send_icon.png";
import fbIcon from "../Common/facebook-icon.png";
import ghIcon from "../Common/github-icon.png";
import liIcon from "../Common/linkedin-icon.png";
import twIcon from "../Common/twitter-icon.png";

const Content = () => {
    return (
        // <div className={styles.content}>
        //     <Navbar/>
        //     <Routes className="app-wrapper-content">
        //         <Route path='/profile/'>
        //             <Route index element={<ProfileContainerWithHooks/>}/>
        //             <Route path='/profile/:userId'
        //                    element={<ProfileContainerWithHooks/>}/>
        //         </Route>
        //         <Route path='/dialogs/*'
        //                element={<DialogsContainer/>}/>
        //         <Route path='/people/*'
        //                element={<PeopleContainer/>}/>
        //         <Route path={'/login/*'}
        //                element={<Login/>}/>
        //     </Routes>
        // </div>

        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.main__column}>
                    <div className={styles.main__profilecard}>
                        <div className={styles.main__profilecardimage}>
                            <img src={profilePhoto} alt="profile photo"/>
                        </div>
                        <div className={styles.main__profilecardinfo}>
                            <p className={styles.main__name}>My Name</p>
                            <p className={styles.main__status}>My status Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit
                                amet. Lorem ipsum dolor sit amet.</p>
                            <p className={styles.main__occupation}>My occupation</p>
                            <div className={styles.main__links}>
                                <a href="#"><img src={fbIcon} alt="fb icon"/></a>
                                <a href="#"><img src={ghIcon} alt="gh icon"/></a>
                                <a href="#"><img src={liIcon} alt="li icon"/></a>
                                <a href="#"><img src={twIcon} alt="tw icon"/></a>
                            </div>
                            <div>
                                <button className={styles.main__button}>Contact</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.main__postcontainer}>
                        <div className={styles.main__userprofile}>
                            <img src={profilePhoto} alt=""/>
                            <p>My name</p>
                        </div>
                        <div className={styles.main__postinputcontainer}>
                            <textarea placeholder="Say!" rows="2"></textarea>
                            <button><img src={sendIcon} alt=""/></button>
                        </div>
                    </div>

                    <div className={styles.main__postscontainer}>
                        <div className={styles.main__userprofile}>
                            <img src={profilePhoto} alt=""/>
                            <p>My name</p>
                        </div>
                        <p className={styles.main__posttext}>rastLorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Deserunt dolorum delectus placeat ducimus rem iusto fugiat
                            vel cumque debitis impedit.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Content;