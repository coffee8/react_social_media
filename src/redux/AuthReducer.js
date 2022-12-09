const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
        return {
            ...state,
            id: action.id,
            email: action.email,
            login: action.login,
            isAuth: true
        }
    }


    return state;
}

export const setAuthUserData = ({id, email, login}) => ({type: SET_AUTH_USER_DATA, id, email, login});

export default authReducer;