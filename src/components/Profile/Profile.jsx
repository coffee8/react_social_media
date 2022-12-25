import style from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <ProfileInfo profileInfo={props.profileInfo}/>
            {/*<MyPostsContainer />*/}
        </div>
    );
}

export default Profile;