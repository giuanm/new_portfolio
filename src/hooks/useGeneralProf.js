import { useState, useEffect } from "react";


export const useGeneral = (data) =>{
    const [general, setGeneral] = useState([]);
    useEffect(()=>{
      async function post_general(){
        try{
          const gen = await data.post_professional.general;
          setGeneral(gen)
        } catch(error){
          // console.log(error)
        }
      }
      post_general()
    }, [data])
  
  return general
}