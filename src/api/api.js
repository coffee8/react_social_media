import axios from "axios";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': '4628de7e-1fd9-43bc-96c7-1c54cb7fabeb'
        }
    }
);

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    auth() {
        return instance.get('auth/me')
            .then(response => response.data)
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    }

}
