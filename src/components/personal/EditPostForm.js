import { useState } from 'react';
import './EditPostForm.css';
import {NavLink, useNavigate} from 'react-router-dom'
import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import { useIdContext } from '../../hooks/useIdContext';
import { useClickMenuContext } from '../../hooks/useClickMenuContext';

import send from "../../assets/icons/send.svg";

const EditPostForm = () => {
  const {url} = useUrlContext();
  const {data} = useFetch(url);
  const {_id} = useIdContext();
  const {_click} = useClickMenuContext();
  const navigate = useNavigate()

  let post_personal = localStorage.getItem("post_personal")
  let post_personal_eng = localStorage.getItem("post_personal_eng")
  let arrFiltered = []

  const selectPost = (arr) =>{

    arr = JSON.parse(arr)
    let general = arr.general
    let dance = arr.dance
    let travel = arr.travel
    
    if(_click === "general"){
      let newPostGeneral = [...general];
      arrFiltered = newPostGeneral.filter((post) =>
        post.id === _id ? post : null
      );
    }
    if(_click === "dance"){
      let newPostDance = [...dance];
      arrFiltered = newPostDance.filter((post) =>
        post.id === _id ? post : null
      );
    }
    if(_click === "travel"){
      let newPostTravel = [...travel];
      arrFiltered = newPostTravel.filter((post) =>
        post.id === _id ? post : null
      );
    }
    return arrFiltered
  }

  const [name, setName] = useState(selectPost(post_personal)[0].name);
  const [media, setMedia] = useState(selectPost(post_personal)[0].media);
  const [type_media, setTypeMedia] = useState(selectPost(post_personal)[0].type_media);
  const [URLmedia, setURLMedia] = useState(selectPost(post_personal)[0].URLmedia);
  const [_description, _setDescription] = useState(selectPost(post_personal)[0].description);
  const [description_eng, setDescription_eng] = useState(selectPost(post_personal_eng)[0].description);
  const [type_post, setType_post] = useState(_click)

  const deletePost = (id) =>{

    let post_personal = localStorage.getItem("post_personal")
    let post_personal_eng = localStorage.getItem("post_personal_eng")

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
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let description = _description
    let id = _id
    const post_personal = {
      id,
      name,
      media,
      type_media,
      URLmedia,
      description,
    }

    description = description_eng

    const post_personal_eng = {
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
    upDatePost(post_personal, post_personal_eng, type_post)
    navigate('/new_portfolio/personal')
  }

  const upDatePost = (post, post_eng, type_post) =>{
    let post_personal = localStorage.getItem("post_personal")
    let post_personal_eng = localStorage.getItem("post_personal_eng")
    
    const addArr = (arr, _post) =>{
      arr = JSON.parse(arr)

      let general = arr.general
      let dance = arr.dance
      let travel = arr.travel

      if(type_post === "general"){
        general = [...general, _post]
      } else if(type_post === "dance"){
        dance = [...dance, _post]
      } else if(type_post === "travel"){
        travel =  [...travel, _post]
      }

      return arr = {general, dance, travel}
    }
    localStorage.setItem("post_personal", JSON.stringify(addArr(post_personal, post)))
    localStorage.setItem("post_personal_eng", JSON.stringify(addArr(post_personal_eng, post_eng)))
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
            <option value="dance">Dança</option>
            <option value="travel">Viagem</option>
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
        <div className='divNavForm'>
          <NavLink to="/new_portfolio/home" className= "linkEdit">Home</NavLink>
          <NavLink to="/new_portfolio/personal" className= "linkEdit">{data.personal}</NavLink>
        </div>
      </form>
    </div>
  )
}

export default EditPostForm