import React, {ChangeEvent, Dispatch} from 'react';
import {DialogType, MessageType, sendMessageAC, updateMessageTexAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {AnyAction} from "redux";



// type DialogsPropsType = {
//     store: StoreType
// }

// export const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store:any) => {
//
//                 const messagesPage = store.getState().messagesPage
//                 // const navigate = useNavigate();
//                 const sendMessageHandler = () => {
//                     store.dispatch(sendMessageAC())
//                 }
//
//                 const updateMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
//                     store.dispatch(updateMessageTexAC(e.currentTarget.value))
//                 }
//
//                 return (
//                     <Dialogs sendMessageHandler={sendMessageHandler} updateMessageTextHandler={updateMessageTextHandler}
//                              messagePage={messagesPage}/>)
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

type MapStateToPropsReturnType ={
    dialogsData:DialogType[]
    messagesData:MessageType[]
    updateMessageText:string
}
type MapDispatchToPropsReturnType ={
    sendMessageHandler: () => void
    updateMessageTextHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export type DialogPagePropsType = MapStateToPropsReturnType & MapDispatchToPropsReturnType
let mapStateToProps = (state:RootState):MapStateToPropsReturnType=> {
    return{
        dialogsData: state.dialogPage.dialogsData,

        messagesData:state.dialogPage.messagesData,

        updateMessageText:state.dialogPage.updateMessageText

    }
}
let mapDispathToProps = (dispatch:Dispatch<AnyAction>):MapDispatchToPropsReturnType=> {
    return{
        updateMessageTextHandler: (e: ChangeEvent<HTMLInputElement>)=>{
            dispatch(updateMessageTexAC(e.currentTarget.value))
        },
        sendMessageHandler:()=>{
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;