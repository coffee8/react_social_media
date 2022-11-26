const initialState = {
    usersData: [
        {userImage: "image", userName: "name", userStatus: "my status", userCity: "my city"},
        {userImage: "image", userName: "name", userStatus: "my status", userCity: "my city"},
        {userImage: "image", userName: "name", userStatus: "my status", userCity: "my city"},
        {userImage: "image", userName: "name", userStatus: "my status", userCity: "my city"},
        {userImage: "image", userName: "name", userStatus: "my status", userCity: "my city"},
    ]
}


const peopleReducer = (state = initialState, action) => {
    return state;
}

export default peopleReducer;