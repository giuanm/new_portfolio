import { useState, useEffect } from "react";


export const useHard = (data) =>{
  const [hardSkills, setHardSkills] = useState([]);
  useEffect(()=>{
    
    async function hard(){
      try{
        const hardSk = await data.skills.hardSkills;
        setHardSkills(hardSk)
      } catch(error){
  
      }
    }

    hard()
  }, [data])
  
  return hardSkills
}