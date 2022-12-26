import styles from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
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
        <div className={styles.main__profilecard}>
            <div className={styles.main__profilecardimage}>
                <img src={props.profileInfo.photos.large === null ?
                    profilePhoto : props.profileInfo.photos.large} alt="profile photo"/>
            </div>
            <div className={styles.main__profilecardinfo}>
                <p className={styles.main__name}>{props.profileInfo.fullName}</p>
                <p className={styles.main__status}>
                    {`${props.profileInfo.aboutMe === null ? 
                        "Happy react developer ^^" : props.profileInfo.aboutMe}`}</p>
                <p className={styles.main__occupation}>
                    {`${props.profileInfo.lookingForAJob ?
                        "Looking for a job!" : "I\'m employed!"}`}</p>
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