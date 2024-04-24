import './Media.css';
// Hooks imports
import { useClickMenuContext } from '../../hooks/useClickMenuContext';
import { useNavigate} from 'react-router-dom'
import { useIdContext } from '../../hooks/useIdContext';
import {React } from 'react'
import edit from '../../assets/icons/edit.svg'
import trash from '../../assets/icons/trash_bin.svg'
// import ReactPlayer from 'react-player/youtube'

const VideoPost = ({name, media, url, id, description }) => {
  const navigate = useNavigate();
  const {dispatch2} = useIdContext();
  const {_click, dispatch} = useClickMenuContext();
  let click =""
  if(_click === "general"){
    click="dance"
  } else if(_click === "dance"){
    click="travel"
  } else if(_click === "travel"){
    click="general"
  }

  const editPost = (id) =>{
    dispatch2({type: "user", value: id})
    navigate('/new_portfolio/editPost')
  }

  const deletePost = (id) =>{

    let post_personal = localStorage.getItem("post_personal")
    let post_personal_eng = localStorage.getItem("post_personal_eng")
    let click_currently = _click

    const delPost = (arr) =>{
      arr = JSON.parse(arr)
      let general = arr.general
      let dance = arr.dance
      let travel = arr.travel
      
      let newPostGeneral = [...general];
      general = newPostGeneral.filter((post) =>
        post.id !== id ? post : null
      );

      let newPostDance = [...dance];
      dance = newPostDance.filter((post) =>
        post.id !== id ? post : null
      );

      let newPostTravel = [...travel];
      travel = newPostTravel.filter((post) =>
        post.id !== id ? post : null
      );
      return arr = {general, dance, travel}
    }
    localStorage.setItem("post_personal", JSON.stringify(delPost(post_personal)))
    localStorage.setItem("post_personal_eng", JSON.stringify(delPost(post_personal_eng)))

    dispatch({type: "user", value: click})
    dispatch({type: "user", value: click_currently})
  }

    return (
      <div className='divPost'>
        <h1 className='h1Post'><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h1>
        <iframe className="videoHobbies" src={media} title={name}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        {/* <ReactPlayer url={media} className="videoHobbies" title={name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/> */}
        <p className='pPost'>{description}</p>
        <img src={edit} alt="edit" className='changePost' onClick={() => editPost(id)}/>
        <img src={trash} alt="trash"  className='changePost' onClick={() => deletePost(id)}/>
      </div>
    );
  };

export default VideoPost