import { createContext, useReducer } from "react";

export const InfoUserContext = createContext();

export const selectUrlReducer = (state, action) => {
    switch (action.type) {
        case "user":
            return {...state, _name: action.value}
        default:
            return state;
    }
}

export const InfoUserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(selectUrlReducer, {_name: "Visitor" })
    return( 
        <InfoUserContext.Provider value={{...state, dispatch}}>
            {children}
        </InfoUserContext.Provider>
    )
}