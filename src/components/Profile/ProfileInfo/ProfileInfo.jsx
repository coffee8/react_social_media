import styles from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import userIcon from "../../../userIcon.png";
import facebookIcon from "../../Common/facebook-icon.png"
import githubIcon from "../../Common/github-icon.png"
import linkedinIcon from "../../Common/linkedin-icon.png"
import twitterIcon from "../../Common/twitter-icon.png"
import profilePhoto from "../../Common/profile_photo3.jpeg";
import fbIcon from "../../Common/facebook-icon.png";
import ghIcon from "../../Common/github-icon.png";
import liIcon from "../../Common/linkedin-icon.png";
import twIcon from "../../Common/twitter-icon.png";

const ProfileInfo = (props) => {

    if (!props.profileInfo) {
        return <Preloader/>
    }

    return (
        // <div className={style.profile}>
        //     <div>
        //         <img src={props.profileInfo.photos.large === null ?
        //             userIcon : props.profileInfo.photos.large}
        //              className={style.image}
        //              alt="profile"/>
        //     </div>
        //     <div>
        //         <span className={style.name}>
        //             {props.profileInfo.fullName}
        //         </span>
        //     </div>
        //     <div>
        //         <span className={style.aboutMe}>
        //             {`${props.profileInfo.aboutMe === null ?
        //                 'Happy react developer ^^' : props.profileInfo.aboutMe}`}
        //         </span>
        //     </div>
        //     <div>
        //         <span>
        //             {`${props.profileInfo.lookingForAJob ?
        //                 'Looking for a job!' : 'I\'m employed!'}`}
        //         </span>
        //     </div>
        //     <div>
        //         <a href="#">
        //             <img src={facebookIcon} alt="facebook icon" className={style.icon}/>
        //         </a>
        //         <a href="#">
        //             <img src={linkedinIcon} alt="linkedin icon" className={style.icon}/>
        //         </a>
        //         <a href="#">
        //             <img src={twitterIcon} alt="twitter icon" className={style.icon}/>
        //         </a>
        //         <a href="#">
        //             <img src={githubIcon} alt="github icon" className={style.icon}/>
        //         </a>
        //     </div>
        //     <button className={style.buttonContact}>Contact</button>
        // </div>

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
    )
}

export default ProfileInfo;