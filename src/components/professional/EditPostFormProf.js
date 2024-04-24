import { useState } from 'react';
import './EditPostFormProf.css';
import {NavLink, useNavigate} from 'react-router-dom'
import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import { useIdContext } from '../../hooks/useIdContext';
import { useClickMenuContext } from '../../hooks/useClickMenuContext';

import send from "../../assets/icons/send.svg";

const EditPostFormProf = () => {
  const {url} = useUrlContext();
  const {data} = useFetch(url);
  const {_id} = useIdContext();
  const {_click} = useClickMenuContext();
  const navigate = useNavigate()

  let post_professional = localStorage.getItem("post_professional")
  let post_professional_eng = localStorage.getItem("post_professional_eng")
  let arrFiltered = []

  const selectPost = (arr) =>{

    arr = JSON.parse(arr)
    let general = arr.general
    let project = arr.project
    let experience = arr.experience
    
    if(_click === "general"){
      let newPostGeneral = [...general];
      arrFiltered = newPostGeneral.filter((post) =>
        post.id === _id ? post : null
      );
    }
    if(_click === "project"){
      let newPostDance = [...project];
      arrFiltered = newPostDance.filter((post) =>
        post.id === _id ? post : null
      );
    }
    if(_click === "experience"){
      let newPostTravel = [...experience];
      arrFiltered = newPostTravel.filter((post) =>
        post.id === _id ? post : null
      );
    }
    return arrFiltered
  }

  const [name, setName] = useState(selectPost(post_professional)[0].name);
  const [media, setMedia] = useState(selectPost(post_professional)[0].media);
  const [type_media, setTypeMedia] = useState(selectPost(post_professional)[0].type_media);
  const [URLmedia, setURLMedia] = useState(selectPost(post_professional)[0].URLmedia);
  const [_description, _setDescription] = useState(selectPost(post_professional)[0].description);
  const [description_eng, setDescription_eng] = useState(selectPost(post_professional_eng)[0].description);
  const [type_post, setType_post] = useState(_click)

  const deletePost = (id) =>{

    let post_professional = localStorage.getItem("post_professional")
    let post_professional_eng = localStorage.getItem("post_professional_eng")

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
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let description = _description
    let id = _id
    const post_professional = {
      id,
      name,
      media,
      type_media,
      URLmedia,
      description,
    }

    description = description_eng

    const post_professional_eng = {
      id,
      name,
      media,
      type_media,
      URLmedia,
      description,
    }

    if(!name || !type_post || !type_media || !media){
      return alert("You need to set all information!")
    }
    deletePost(_id)
    upDatePost(post_professional, post_professional_eng, type_post)
    navigate('/new_portfolio/professional')
  }

  const upDatePost = (post, post_eng, type_post) =>{
    let post_professional = localStorage.getItem("post_professional")
    let post_professional_eng = localStorage.getItem("post_professional_eng")
    
    const addArr = (arr, _post) =>{
      arr = JSON.parse(arr)

      let general = arr.general
      let project = arr.project
      let experience = arr.experience

      if(type_post === "general"){
        general = [...general, _post]
      } else if(type_post === "project"){
        project = [...project, _post]
      } else if(type_post === "experience"){
        experience =  [...experience, _post]
      }

      return arr = {general, project, experience}
    }
    localStorage.setItem("post_professional", JSON.stringify(addArr(post_professional, post)))
    localStorage.setItem("post_professional_eng", JSON.stringify(addArr(post_professional_eng, post_eng)))
  }

  return (
    <div>
      <h1 className='titleH1'>Edite o Post!</h1>
              {/* Forms */}
      <form className='createForm'>
        <label>
          <span className='title description'>Título</span>
          <input type="text" name='name' placeholder='Writer your title' onChange={(e) => setName(e.target.value)} value={name} />
        </label>
        <label>
          <span className='title'>Escolha o tipo de post:</span>
          <select name='type_post' onChange={(e) => setType_post(e.target.value)} value={type_post}>
            <option value=""></option>
            <option value="general">Geral</option>
            <option value="project">Projeto</option>
            <option value="experience">Experiência</option>
          </select>
        </label>
        <label>
          <span className='title media'>Endereço de Mídia</span>
          <input type="text" name='media' placeholder='Add your image or video URL' onChange={(e) => setMedia(e.target.value)} value={media} />
        </label>
        <label>
          <span className='title'>Escolha o tipo de mídia:</span>
          <select name='type_media' onChange={(e) => setTypeMedia(e.target.value)} value={type_media}>
            <option value=""></option>
            <option value="img">Imagem</option>
            <option value="video">Vídeo</option>
          </select>
        </label>
        <label>
          <span className='title URLmedia'>Endereço de direcionar</span>
          <input type="text" name='URLmedia' placeholder='Add the URL to redirect the title' onChange={(e) => setURLMedia(e.target.value)} value={URLmedia} />
        </label>
        <label>
          <span className='title description'>Descrição</span>
          <textarea name='description' onChange={(e) => _setDescription(e.target.value)} value={_description} placeholder='Escreva sua descrição' />
        </label>
        <label>
          <span className='title description'>Description</span>
          <textarea name='description_eng' onChange={(e) => setDescription_eng(e.target.value)} value={description_eng} placeholder='Write your description'/>
        </label>
        <img src={send} alt="Editar"  onClick={handleSubmit} className='btn'/>
        <div className='divNavFormProf'>
          <NavLink to="/new_portfolio/home" className= "linkEditProf">Home</NavLink>
          <NavLink to="/new_portfolio/professional" className= "linkEditProf">{data.professional}</NavLink>
        </div>
      </form>
    </div>
  )
}

export default EditPostFormProf