import {ActionsType, AddPostActionType, PostType, UpdateTextActionType} from "./store";

type InitialStateType = {
    posts:PostType[]
    updateText: string
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

const profileReducer = (state = initialState, action: ActionsType) :InitialStateType => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPost: PostType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            };
            state.posts.unshift(newPost);
            state.updateText = ('');
            return state;
        case 'UPDATE-TEXT' :
            state.updateText = action.postMessage;
            return state;
        default : return state;
    }
}

// type ProfileReducerACType = {}

export const addPostAC = (postMessage:string):AddPostActionType => {
    return{
        type:'ADD-POST',
        postMessage
    }as const
}

export const updatePostTextAC = (postMessage:string):UpdateTextActionType => {
    return{
        type:'UPDATE-TEXT',
        postMessage
    }as const
}
export default profileReducer;