import message from "../components/Dialogs/Message/Message";


export type InitialStateType = {
    posts: PostType[]
    updateText: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'my first post', likesCount: 12},
        {id: 2, message: 'my second post', likesCount: 1},
        {id: 3, message: 'my 3th post', likesCount: 12},
        {id: 4, message: 'my first post', likesCount: 12},
        {id: 5, message: 'my first post', likesCount: 12},
        {id: 6, message: 'my first post', likesCount: 12},
    ],
    updateText: '',
}

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST' :
            // let newPost: PostType = {
            //     id: 5,
            //     message: action.postMessage,
            //     likesCount: 0
            // };
            // state.posts.unshift(newPost);
            // state.updateText = ('');
            return {
                ...state,
                posts: [{id: 5, message: action.postMessage, likesCount: 0}, ...state.posts],
                updateText: ''
            }
        case 'UPDATE-TEXT' :
            // state.updateText = action.postMessage;
            return {...state, updateText: action.payload.postMessage}
        default :
            return state
    }
}

type ActionsType = ProfileReducerACType | UpdatePostTextACType

type ProfileReducerACType = ReturnType<typeof addPostAC>

export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage
    } as const
}

type UpdatePostTextACType = ReturnType<typeof updatePostTextAC>
export const updatePostTextAC = (postMessage: string) => {
    return {
        type: 'UPDATE-TEXT',
        payload: {
            postMessage
        }
    } as const
}
export default profileReducer;