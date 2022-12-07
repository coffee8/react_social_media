import style from "../Profile.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import userIcon from "../../../userIcon.png"

const ProfileInfo = (props) => {

    if(!props.profileInfo) {
        return <Preloader/>
    }

    return (
        <div>
            <div><img src={props.profileInfo.photos.large == null ? userIcon : props.profileInfo.photos.large}
                      className={style.img}
                      alt="profile"/></div>
            <div>{'Name: ' + props.profileInfo.fullName}</div>
            <div>{'About me: ' + props.profileInfo.aboutMe}</div>
            <div>{`Looking for a job: ${props.profileInfo.lookingForAJob ? 'yes' : 'no'}`}</div>

        </div>
    )
}

export default ProfileInfo;