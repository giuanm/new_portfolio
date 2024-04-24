import { useContext } from "react";
import { UrlContextPost } from "../context/UrlContext_post";

export const useUrlContextPost = () => {

    const context = useContext(UrlContextPost)

    if(!context){
        console.log("Context não encontrado.")
    }

    return context;
}