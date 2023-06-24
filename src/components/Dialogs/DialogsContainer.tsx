import React, {ChangeEvent} from 'react';
import {DialogType, MessageType, sendMessageAC, updateMessageTexAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import { Dispatch } from 'redux';


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
let mapDispathToProps = (dispatch:Dispatch):MapDispatchToPropsReturnType=> {
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