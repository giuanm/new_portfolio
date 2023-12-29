import { createContext, useReducer } from "react";

// Adresses URL
const arrURL = [
    "https://raw.githubusercontent.com/giuanm/js-developer-portfolio/main/data/profile.json",
    "https://raw.githubusercontent.com/giuanm/js-developer-portfolio/main/data/profile_english.json"
];

export const UrlContext = createContext();

export const selectUrlReducer = (state, action) => {
    switch (action.type) {
        case "PT":
            return {...state, url: arrURL[0]}
        case "EN":
            return {...state, url: arrURL[1]}
        default:
            return state;
    }
}

export const UrlContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(selectUrlReducer, {url: arrURL[1]})
    
    return( 
        <UrlContext.Provider value={{...state, dispatch}}>
            {children}
        </UrlContext.Provider>
    )
};