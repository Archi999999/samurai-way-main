import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersApi = {
    getUsers(){
        const promise = instance.get('users')
        return promise
    }
}


export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}