


export type Friends_UsersState = {
    status: string
    users:[{photo: { small:'' }, status:''}]
}

type ActionsType = ReturnType<typeof setFriendsUsersAC> | ReturnType<typeof setFriendsStatusAC>

export const friendsReducer = (state:Friends_UsersState, action:ActionsType) =>{
    switch (action.type) {
        case "FRIENDS/SET_STATUS": {
            return state
        }
        case "FRIENDS/SET_USERS": {
            return state
        }
        default: return state
    }
}

export const setFriendsUsersAC = (users:[]) =>{
    return{
        type: 'FRIENDS/SET_USERS',
        payload: {
            users
        }
    }as const
}

export const setFriendsStatusAC = (status:'') => {
    return{
        type: 'FRIENDS/SET_STATUS',
        payload:{
            status
        }
    }as const
}