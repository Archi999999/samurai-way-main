import {connect} from "react-redux";
import UsersC from "./UsersС";
import {followAC, InitialUsersStateType, setCurrentPageAC, setUsersAC, UserType} from "../../redux/usersReducer";
import {RootState} from "../../redux/store";
import { Dispatch } from "redux";



export type UsersPagePropsType = MapDispatchToPropsReturnType & MapStateToPropsReturnType

type MapDispatchToPropsReturnType = {
    follow : (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page:number) =>void
}

type MapStateToPropsReturnType = InitialUsersStateType

const mapStateToProps = (state: RootState):MapStateToPropsReturnType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page:number) =>{
            dispatch(setCurrentPageAC(page))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersC)
export default UsersContainer