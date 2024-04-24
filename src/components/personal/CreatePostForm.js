import { useState } from 'react';
import './CreatePostForm.css';
import {NavLink, useNavigate} from 'react-router-dom'
import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';

import send from "../../assets/icons/send.svg";

const CreatePostForm = () => {
  const {url} = useUrlContext();
  const {data} = useFetch(url);
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [media, setMedia] = useState("");
  const [type_media, setTypeMedia] = useState("");
  const [URLmedia, setURLMedia] = useState("");
  const [_description, _setDescription] = useState("");
  const [description_eng, setDescription_eng] = useState("");
  const [type_post, setType_post] = useState("")

  const upDatePost = (post, post_eng, type_post) =>{
    let arrpost = localStorage.getItem("post_personal")
    let arrpost_eng = localStorage.getItem("post_personal_eng")

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

    localStorage.setItem("post_personal", JSON.stringify(addArr(arrpost, post)))
    localStorage.setItem("post_personal_eng", JSON.stringify(addArr(arrpost_eng, post_eng)))

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random()*100000)

    let description = _description

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
    // console.log(post_personal.type_post)

    upDatePost(post_personal, post_personal_eng, type_post)
    setName("")
    setType_post("")
    setMedia("")
    setTypeMedia("")
    setURLMedia("")
    _setDescription("")
    setDescription_eng("")
    navigate('/new_portfolio/personal')
  }

  return (
    <div>
      <h1 className='titleH1'>Criar uma postagem!</h1>
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
        <img src={send} alt="enviar"  onClick={handleSubmit} className='btn'/>
        <div className='divNavForm'>
          <NavLink to="/new_portfolio/home" className= "link">Home</NavLink>
          <NavLink to="/new_portfolio/personal" className= "link">{data.personal}</NavLink>
        </div>
      </form>
    </div>
  )
}

export default CreatePostForm