import React, {useEffect, useState} from 'react';
import styles from './users.module.css'
import {UsersPagePropsType} from "./UsersContainer";
import {usersApi, UserType} from "../../api/users-api";
import userPhoto from '../../assets/images/user-icon.svg'
import axios from "axios";


// export const Users = (props: UsersPagePropsType) => {
//
//     const [users, setUsers] = useState<any>([])
//
//
//
//     useEffect(() => {
//         usersApi.getUsers().then((res) => setUsers(res.data.items))
//         // console.log(u)
//         // setUsers(u)
//     }, [])
//
//     return (
//         <div>
//             {
//                 users.map((user:UserType) => {
//                     return (
//                         <div key={user.id}>
//                         <span>
//                             <div>
//                                 <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
//                             </div>
//                             <div>
//                                 {/*<button*/}
//                                 {/*    onClick={() => props.follow(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>*/}
//                             </div>
//                         </span>
//                             <span>
//                             <span>
//                                 <div>{user.name}</div>
//                                 <div>{user.status}</div>
//                             </span>
//                             <span>
//                                 <div>{}</div>
//                                 <div>{}</div>
//                             </span>
//                         </span>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// };

type Props = any
type State = any

class UserC extends React.Component<Props, State>{

    constructor(props:any) {
        super(props);

    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div>
                <div>
                    <span>1</span>
                    <span className={styles.selectedPage}>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {
                    this.props.users.map((user:UserType) => {
                        return (
                            <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                            </div>
                            <div>
                                <button
                                    onClick={() => this.props.follow(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>
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
        )
    }
};


export default UserC;

