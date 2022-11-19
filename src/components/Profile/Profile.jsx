import style from './Profile.module.css'
import profilePicture from './profile_picture.jpeg'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <div>
                <img src={profilePicture} className={style.img}
                alt="profile"/>
            </div>
           Profile
            <MyPostsContainer postData={props.postData}
                     dispatch={props.dispatch}
                     addPostActionCreator={props.addPostActionCreator}
                     onPostChangeActionCreator={props.onPostChangeActionCreator}
                     newPostText={props.newPostText}/>
        </div>
    );
}

export default Profile;