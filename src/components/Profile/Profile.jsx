import style from './Profile.module.css'
import profilePicture from './profile_picture.jpeg'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
                <img src={profilePicture} className={style.img}
                alt="profile"/>
            </div>
           Profile
            <MyPosts/>
        </div>
    );
}

export default Profile;