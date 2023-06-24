import {Dispatch} from "redux";
import {Friends_UsersState, setFriendsStatusAC, setFriendsUsersAC} from "../../redux/friendsReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";


const mapStateToProps = (state: RootState) =>{
    return{
        // users: state.friendsPage.users,
        // status: state.friendsPage.status
    }
}

const mapDispatchToProps = (dispatch:Dispatch) =>{
    return {
        setUsers: (users:any) =>{
            dispatch(setFriendsUsersAC(users))
        },
        setStatus: (status: any) =>{
            dispatch(setFriendsStatusAC(status))
        }
    }
}

const FriendsContainer =  connect (mapStateToProps, mapDispatchToProps)

export default FriendsContainer