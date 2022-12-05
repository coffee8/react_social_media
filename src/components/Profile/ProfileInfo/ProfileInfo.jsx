import style from "../Profile.module.css";
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if(!props.profileInfo) {
        return <Preloader/>
    }

    return (
        <div>
                <img src={''} className={style.img}
                     alt="profile"/>
            <p>{props.profileInfo.fullName}</p>
        </div>
    )
}

export default ProfileInfo;