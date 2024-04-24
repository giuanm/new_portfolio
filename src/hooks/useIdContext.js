import { useContext } from "react";
import { IdContext } from "../context/IdContext";

export const useIdContext = () => {

    const context = useContext(IdContext)

    if(!context){
        console.log("Context não encontrado.")
    }

    return context;
}