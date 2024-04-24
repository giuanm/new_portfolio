import { createContext, useReducer } from "react";

export const ClickMenuContext = createContext();

export const selectClickReducer = (state, action) => {
    switch (action.type) {
        case "user":
            return {...state, _click: action.value}
        default:
            return state;
    }
}
export const ClickMenuContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(selectClickReducer, {_click: "general" })
    return( 
        <ClickMenuContext.Provider value={{...state, dispatch}}>
            {children}
        </ClickMenuContext.Provider>
    )
}