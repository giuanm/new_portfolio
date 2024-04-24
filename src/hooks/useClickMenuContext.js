import { useContext } from "react";
import { ClickMenuContext } from "../context/ClickMenuContext";

export const useClickMenuContext = () => {

    const context = useContext(ClickMenuContext)

    if(!context){
        console.log("Context não encontrado.")
    }

    return context;
}