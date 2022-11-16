import style from './Profile.module.css'
import profilePicture from './profile_picture.jpeg'
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <div>
                <img src={profilePicture} className={style.img}
                alt="profile"/>
            </div>
           Profile
            <MyPosts postData={props.postData} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;