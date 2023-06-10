
export type InitialStateType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    updateMessageText: string
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

const initialState: InitialStateType = {
    dialogsData: [
        {id: 1, name: 'Yulia'},
        {id: 2, name: 'semen'},
        {id: 3, name: 'Tereza'},
        {id: 4, name: 'Lola'},
        {id: 5, name: 'Evgenia'},
        {id: 6, name: 'Sonja'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-Kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    updateMessageText: ''
}


const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SEND-MESSAGE' :
            // const newMessage = {id: 1, message: state.updateMessageText};
            // // state.messagesPage.messagesData.
            // state.messagesData.push(newMessage)
            // state.updateMessageText = '';
            return {
                ...state,
                messagesData:[{id:1, message: state.updateMessageText}, ...state.messagesData],
                updateMessageText:''
            }
        case 'UPDATE-MESSAGE-TEXT':
            // state.updateMessageText = action.dialogMessage;
            return {...state, updateMessageText:action.dialogMessage}
        default:
            return state
    }
}
type ActionsType = SendMessageACType | UpdateMessageTextACType

type SendMessageACType = ReturnType<typeof sendMessageAC>


export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    }as const
}

type UpdateMessageTextACType = ReturnType<typeof updateMessageTexAC>
export const updateMessageTexAC = (dialogMessage: string) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        dialogMessage
    }as const
}
export default dialogsReducer;