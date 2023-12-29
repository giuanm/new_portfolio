import { useContext } from "react";
import { UrlContext } from "../context/UrlContext";

export const useUrlContext = () => {

    const context = useContext(UrlContext)

    if(!context){
        console.log("Context não encontrado.")
    }

    return context;
}