import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import FriendsContainer from './components/Friends/FriendsContainer';


type AppProps = {
    // store: StoreType
}


function App(props: AppProps) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile'}
                           element={<Profile
                               // store={props.store}
                               // profilePage={props.state.profilePage}
                               //               dispatch={props.dispatch}
                           />}/>
                    <Route path={'/dialogs'}
                           element={<DialogsContainer/>}/>
                    <Route path={'/users'}
                           element={<UsersContainer/>}/>
                    {/*<Route path={'/friends'}*/}
                    {/*       // element={<FriendsContainer/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}


export default App;
