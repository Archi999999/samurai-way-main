
export type InitialUsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

// export type UserType = {
//     id: number,
//     fullName: string,
//     photoUrl: string
//     status: string,
//     followed: boolean
//     location: {
//         country: string,
//         city: string}
// }

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

// const [users, setUsers] = useState<UserType[]>([])

const initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action: ActionsType): InitialUsersStateType => {
    switch (action.type) {
        case "FOLLOW":{
            return {...state, users:state.users.map(user=> user.id === action.payload.userId ? {...user, followed: !user.followed} : user)}
        }
        case "SET_USERS": {
            return {...state, users: [...action.payload.users]}
        }
        case "SET_CURRENT_PAGE":{
            return {...state, currentPage: action.payload.currentPage}
        }
        default :
            return state
    }
}

type ActionsType = SetUsersACType | FollowACType | SetCurrentPageACType

type SetUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        payload:{
            users
        }
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return{
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    }as const
}

type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload:{
            userId
        }
    } as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export default usersReducer;