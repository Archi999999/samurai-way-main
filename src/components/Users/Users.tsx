import React, {useEffect, useState} from 'react';
import styles from './users.module.css'
import {UsersPagePropsType} from "./UsersContainer";
import {usersApi, UserType} from "../../api/users-api";
import userPhoto from '../../assets/images/user-icon.svg'


export const Users = (props: UsersPagePropsType) => {

    const [users, setUsers] = useState<any>([])



    useEffect(() => {
        usersApi.getUsers().then((res) => setUsers(res.data.items))
        // console.log(u)
        // setUsers(u)
    }, [])

    return (
        <div>
            {
                users.map((user:UserType) => {
                    return (
                        <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                            </div>
                            <div>
                                {/*<button*/}
                                {/*    onClick={() => props.follow(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>*/}
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{}</div>
                                <div>{}</div>
                            </span>
                        </span>
                        </div>
                    )
                })
            }
        </div>
    );
};



