import style from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import userIcon from "../../../userIcon.png"

const ProfileInfo = (props) => {

    if (!props.profileInfo) {
        return <Preloader/>
    }

    return (
        <div className={style.profile}>
            <div>
                <img src={props.profileInfo.photos.large == null ?
                    userIcon : props.profileInfo.photos.large}
                     className={style.image}
                     alt="profile"/>
            </div>
            <div>
                <span>
                    {props.profileInfo.fullName}
                </span>
            </div>
            <div>
                <span>
                    {`${props.profileInfo.aboutMe === null ?
                        props.profileInfo.aboutMe : 'Happy react developer ^^'}`}
                </span>
            </div>
            <div>
                <span>
                    {`${props.profileInfo.lookingForAJob ?
                        'Looking for a job!' : 'I\'m employed!'}`}
                </span>
            </div>

        </div>
    )
}

export default ProfileInfo;