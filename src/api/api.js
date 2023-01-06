import axios from "axios";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': process.env.REACT_APP_API_KEY
        }
    }
);

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 5) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    authMe() {
        return instance.get('auth/me')
            .then(response => response.data);

    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },

    logout() {
        return instance.delete(`auth/login`);
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
}
