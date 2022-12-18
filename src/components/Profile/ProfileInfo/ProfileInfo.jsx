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
                    {'Name: ' + props.profileInfo.fullName}
                </span>
            </div>
            <div>
                <span>
                    {`About me:  ${props.profileInfo.aboutMe === null ?
                        props.profileInfo.aboutMe : 'nothing yet'}`}
                </span>
            </div>
            <div>
                <span>
                    {`Looking for a job: ${props.profileInfo.lookingForAJob ?
                        'yes' : 'no'}`}
                </span>
            </div>

        </div>
    )
}

export default ProfileInfo;