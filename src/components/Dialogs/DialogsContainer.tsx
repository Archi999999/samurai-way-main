import React, {ChangeEvent} from 'react';
import {StoreType,} from '../../redux/store';
import {sendMessageAC, updateMessageTexAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {StoreContext} from '../../StoreContext';


// type DialogsPropsType = {
//     store: StoreType
// }

export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {

                const messagesPage = store.getState().messagesPage
                // const navigate = useNavigate();
                const sendMessageHandler = () => {
                    store.dispatch(sendMessageAC())
                }

                const updateMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    store.dispatch(updateMessageTexAC(e.currentTarget.value))
                }

                return (
                    <Dialogs sendMessageHandler={sendMessageHandler} updateMessageTextHandler={updateMessageTextHandler}
                             messagePage={messagesPage}/>)
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;