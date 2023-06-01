import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {StoreType} from './redux/store';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


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
                           element={<DialogsContainer
                               // store={props.store}
                               // messagePage={props.state.dialogsPage}
                               //               dispatch = {props.dispatch}
                           />}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
