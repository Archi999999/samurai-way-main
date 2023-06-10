import ReactDom from 'react-dom';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import {Provider} from "react-redux";



let rerenderEntireTree = () => {
    ReactDom.render(
        <BrowserRouter>
            <Provider store ={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'))
}

rerenderEntireTree();


store.subscribe(rerenderEntireTree)

// reportWebVitals();
