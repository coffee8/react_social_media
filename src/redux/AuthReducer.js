import {usersAPI as userAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
    id: null,
    email: null,
    login: null,
    rememberMe: null,
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
                isAuth: action.isAuth
            }

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    id,
    email,
    login,
    isAuth
});

export const auth = () => {
    return dispatch => {
        userAPI.authMe().then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            }
        )
    }
}

export const login = ({email, password, rememberMe}) => (dispatch) => {
    userAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(auth());
        }
    })
}

export const logout = () => (dispatch) => {
    userAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export default authReducer;