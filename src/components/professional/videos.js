import './Media.css';
// Hooks imports
import { useClickMenuContext } from '../../hooks/useClickMenuContext';
import { useNavigate} from 'react-router-dom'
import { useIdContext } from '../../hooks/useIdContext';
import {React } from 'react'
import edit from '../../assets/icons/edit.svg'
import trash from '../../assets/icons/trash_bin.svg'

const VideoPost = ({name, media, url, id, description }) => {
  const navigate = useNavigate();
  const {dispatch2} = useIdContext();
  const {_click, dispatch} = useClickMenuContext();
  let click =""
  if(_click === "general"){
    click="project"
  } else if(_click === "project"){
    click="experience"
  } else if(_click === "experience"){
    click="general"
  }

  const editPost = (id) =>{
    dispatch2({type: "user", value: id})
    navigate('/new_portfolio/editPostProf')
  }

  const deletePost = (id) =>{

    let post_professional = localStorage.getItem("post_professional")
    let post_professional_eng = localStorage.getItem("post_professional_eng")
    let click_currently = _click

    const delPost = (arr) =>{
      arr = JSON.parse(arr)
      let general = arr.general
      let project = arr.project
      let experience = arr.experience
      
      let newPostGeneral = [...general];
      general = newPostGeneral.filter((post) =>
        post.id !== id ? post : null
      );

      let newPostDance = [...project];
      project = newPostDance.filter((post) =>
        post.id !== id ? post : null
      );

      let newPostTravel = [...experience];
      experience = newPostTravel.filter((post) =>
        post.id !== id ? post : null
      );
      return arr = {general, project, experience}
    }
    localStorage.setItem("post_professional", JSON.stringify(delPost(post_professional)))
    localStorage.setItem("post_professional_eng", JSON.stringify(delPost(post_professional_eng)))

    dispatch({type: "user", value: click})
    dispatch({type: "user", value: click_currently})
  }

    return (
      <div className='divPostProf'>
        <h1 className='h1PostProf'><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h1>
        <iframe className="video" src={media} title={name}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        {/* <ReactPlayer url={media} className="videoHobbies" title={name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/> */}
        <p className='pPostProf'>{description}</p>
        <img src={edit} alt="edit" className='changePostProf' onClick={() => editPost(id)}/>
        <img src={trash} alt="trash"  className='changePostProf' onClick={() => deletePost(id)}/>
      </div>
    );
  };

export default VideoPost