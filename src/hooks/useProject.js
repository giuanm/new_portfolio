import { useState, useEffect } from "react";


export const useProject = (data) =>{
    const [project, setProject] = useState([]);
    useEffect(()=>{
      async function post_project(){
        try{
          const proj = await data.post_professional.project;
          setProject(proj)
        } catch(error){
          // console.log(error)
        }
      }
      post_project()
    }, [data])
  
  return project
}