import { useState } from 'react';
import './IdentificationForm.css';
import { useNavigate} from 'react-router-dom'
import { useInfoUserContext } from '../hooks/useInfoUserContext';
import {useFetch} from "../hooks/useFetch";
import { useUrlContext } from '../hooks/useUrlContext';

import send from "../assets/icons/send.svg";

const IdentificationForm = () => {
  const {dispatch} = useInfoUserContext();
  const {url} = useUrlContext();
  const {data} = useFetch(url);
  const [name, setName] = useState("Visitor");
  const [company, setCompany] = useState("");

  // const [role, setRole] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, company, role);
    dispatch({type: "user", value: name})
    navigate('/new_portfolio/home')
  }

  return (
    <div>
              {/* Forms */}
      <form  className='identForm'>
        <label>
          <span className='description'>{data.nameCamp}</span>
          <input type="text" name='name' placeholder='Writer your name' onChange={(e) => setName(e.target.value)} value={name} />
        </label>
        <label>
          <span className='description'>{data.company}</span>
          <input type="text" name='company' placeholder='Writer your company' onChange={(e) => setCompany(e.target.value)} value={company} />
        </label>
        <img src={send} alt="enviar"  onClick={handleSubmit} className='btn'/>
      </form>
    </div>
  )
}

export default IdentificationForm