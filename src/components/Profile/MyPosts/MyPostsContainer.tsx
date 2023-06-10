import React, {ChangeEvent, Dispatch} from 'react';
import {addPostAC, InitialStateType, PostType, updatePostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
// import {StoreContext} from "../../../StoreContext";
import {connect} from "react-redux";
import {AnyAction} from "redux";
import {RootState} from "../../../redux/store";

// type PropsType = {
// store:StoreType
// };

// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState()
//                     const addPostHandler = () => {
//                         store.dispatch(addPostAC(state.profilePage.updateText))
//                         state.profilePage.updateText = ''
//                     }
//                     const updatePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//                         store.dispatch(updatePostTextAC(e.currentTarget.value))
//                     }
//                     return (
//                         <MyPosts profilePage={state.profilePage} updatePostTextHandler={updatePostTextHandler}
//                                  addPost={addPostHandler}/>)
//                 }
//             }
//         </StoreContext.Consumer>)
// };

const mapStateToProps = (state: RootState): { profilePage: InitialStateType } => {
    return {
        profilePage: state.profilePage

    }
}

type mapDispathToPropsRetyrnType = {
    updatePostTextHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addPost: (value:string) => void
}
const mapDispathToProps = (dispatch: Dispatch<AnyAction>): mapDispathToPropsRetyrnType => {
    return {
        updatePostTextHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updatePostTextAC(e.currentTarget.value))
        },
        addPost: (value:string) => {
            dispatch(addPostAC(value))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts)

export default MyPostsContainer;