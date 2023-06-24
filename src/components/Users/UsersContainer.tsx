import {connect} from "react-redux";
import UsersC from "./UsersС";
import {followAC, InitialUsersStateType, setUsersAC, UserType} from "../../redux/usersReducer";
import {RootState} from "../../redux/store";
import { Dispatch } from "redux";



export type UsersPagePropsType = MapDispatchToPropsReturnType & MapStateToPropsReturnType

type MapDispatchToPropsReturnType = {
    follow : (userId: number) => void
    setUsers: (users: UserType[]) => void
}

type MapStateToPropsReturnType = {
    users: UserType[]
}

const mapStateToProps = (state: RootState):InitialUsersStateType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersC)
export default UsersContainer