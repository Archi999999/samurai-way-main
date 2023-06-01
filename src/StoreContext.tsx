import React, {ReactElement} from "react";
import store, {StoreType} from "./redux/store";

type PropsTpe = {
    store: StoreType
    children: ReactElement
}
export const StoreContext = React.createContext(store)

export const Provider = (props:PropsTpe) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}