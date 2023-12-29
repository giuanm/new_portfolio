import { useState, useEffect } from "react";


export const useSoft = (data) =>{
  const [softSkills, setSoftSkills] = useState([]);
  useEffect(()=>{
    
    async function soft(){
      try{
        // console.log(data)
        const softSk = await data.skills.softSkills;
        setSoftSkills(softSk)
      } catch(error){
  
      }
    }

    soft()
  }, [data])
  
  return softSkills
}