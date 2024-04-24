import { createContext, useReducer } from "react";

export const IdContext = createContext();

export const selectIdReducer = (state, action) => {
    switch (action.type) {
        case "user":
            return {...state, _id: action.value}
        default:
            return state;
    }
}
export const IdContextProvider = ({children}) => {
    const [state, dispatch2] = useReducer(selectIdReducer, {_id: 0 })
    return( 
        <IdContext.Provider value={{...state, dispatch2}}>
            {children}
        </IdContext.Provider>
    )
}