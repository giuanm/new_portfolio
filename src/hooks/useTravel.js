import { useState, useEffect } from "react";


export const useTravel = (data) =>{
    const [travel, setTravel] = useState([]);
    useEffect(()=>{
      async function post_travel(){
        try{
          const trav = await data.post_personal.travel;
          setTravel(trav)
        } catch(error){
          // console.log(error)
        }
      }
      post_travel()
    }, [data])
  
  return travel
}