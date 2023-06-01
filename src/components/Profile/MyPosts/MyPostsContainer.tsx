import React, {ChangeEvent} from 'react';
import {addPostAC, updatePostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

// type PropsType = {
// store:StoreType
// };

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()
                    const addPostHandler = () => {
                        store.dispatch(addPostAC(state.profilePage.updateText))
                        state.profilePage.updateText = ''
                    }
                    const updatePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(updatePostTextAC(e.currentTarget.value))
                    }
                    return (
                        <MyPosts profilePage={state.profilePage} updatePostTextHandler={updatePostTextHandler}
                                 addPost={addPostHandler}/>)
                }
            }
        </StoreContext.Consumer>)
};

export default MyPostsContainer;