import { useState, useEffect } from "react";


export const useDance = (data) =>{
    const [dance, setDance] = useState([]);
    useEffect(()=>{
      async function post_dance(){
        try{
          const danc = await data.post_personal.dance;
          setDance(danc)
        } catch(error){
          // console.log(error)
        }
      }
      post_dance()
    }, [data])
  
  return dance
}