import style from './Profile.module.css'
import profilePicture from './profile_picture.jpeg'
const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
                <img src={profilePicture} className={style.img}
                alt="profile"/>
            </div>
           Profile
            <div>My posts</div>
            <div>
                <div>
                    <textarea name="post" id="1" cols="15" rows="3" placeholder="your text"></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div>
                Post
            </div>
            <div>
                Post
            </div>
            <div>
                Post
            </div>
        </div>
    );
}

export default Profile;