import React from 'react';
import {Friends_UsersState, setFriendsUsersAC} from "../../redux/friendsReducer";
import axios from 'axios';


const statuses = {
    NOT_INITIALIZED: ''
}

export const Friends = (props: Friends_UsersState) => {

    if (props.status === statuses.NOT_INITIALIZED) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=30')
            .then((res)=>{
                setFriendsUsersAC(res.data.items)
            })
    }

    if (!props.users.length) {
        return <div>Users not found</div>
    }

    return (
        <div>
            {props.users.map(user=>
                <div>
                    <img src={user.photo.small}/>
                    <span>{user.status}</span>
                </div>

            )}
        </div>
    );
};




