import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "68870a34-22c9-4497-ac25-655c20034f56" }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    getProfile(id) {
        return instance.get(`profile/` + id)
            .then(response => {
                return response.data;
            })
    },
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    delete(id) {
        return instance.delete(`follow/` + id)
            .then(response => {
                return response.data;
            })
    },
    post(id) {
        return instance.post(`follow/` + id)
            .then(response => {
                return response.data;
            })
    }
}