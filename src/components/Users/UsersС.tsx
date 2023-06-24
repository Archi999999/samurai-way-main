import React, {useEffect, useState} from 'react';
import styles from './users.module.css'
import {UsersPagePropsType} from "./UsersContainer";
import {usersApi, UserType} from "../../api/users-api";
import userPhoto from '../../assets/images/user-icon.svg'
import axios from "axios";
import {setCurrentPageAC} from "../../redux/usersReducer";


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

type Props = UsersPagePropsType
type State = any

class UserC extends React.Component<Props, State>{

    constructor(props:UsersPagePropsType) {
        super(props);

    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    onPageChanged = (page:number) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.totalUsersCount}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {

        const pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(page=> {
                        return (
                            <span onClick={()=>this.onPageChanged(page)} className={this.props.currentPage === page ? styles.selectedPage : ''}>{page}</span>
                        )
                    })}
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

