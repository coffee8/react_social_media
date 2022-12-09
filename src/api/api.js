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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true})
            .then(response => response.data)
    }
}
