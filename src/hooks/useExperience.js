import { useState, useEffect } from "react";


export const useExperience = (data) =>{
    const [experience, setExperience] = useState([]);
    useEffect(()=>{
      async function post_experience(){
        try{
          const exper = await data.post_professional.experience;
          setExperience(exper)
        } catch(error){
          // console.log(error)
        }
      }
      post_experience()
    }, [data])
  
  return experience
}