const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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

export const setUserData = ({id, email, login}) => ({type: SET_USER_DATA, id, email, login});