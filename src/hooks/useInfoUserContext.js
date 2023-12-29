import { useContext } from "react";
import { InfoUserContext } from "../context/InfoUserContext";

export const useInfoUserContext = () => {

    const context = useContext(InfoUserContext)

    if(!context){
        console.log("Context não encontrado.")
    }

    return context;
}