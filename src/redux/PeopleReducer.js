const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    usersData: [
        {
            userId: 1, followed: false, userImage: "image",
            userName: "Ahmet", userStatus: "my status", userCity: "my city"
        },
        {
            userId: 2, followed: true, userImage: "image",
            userName: "Sedat", userStatus: "my status", userCity: "my city"
        },
        {
            userId: 3, followed: false, userImage: "image",
            userName: "Aydin", userStatus: "my status", userCity: "my city"
        },
        {
            userId: 4, followed: false, userImage: "image",
            userName: "Musa", userStatus: "my status", userCity: "my city"
        },
        {
            userId: 5, followed: true, userImage: "image",
            userName: "Erkan", userStatus: "my status", userCity: "my city"
        },
    ]
}


const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.userId === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            }
        }
    }
    return state;
}

export const toggleFollowActionCreator = (userId) => ({type: TOGGLE_FOLLOW, userId});

export const setUsersActionCreator = (state) => ({type: SET_USERS});


export default peopleReducer;