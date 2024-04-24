import styled from 'styled-components'
import './Navbar.css'

import {NavLink} from 'react-router-dom'

import {useFetch} from "../hooks/useFetch";
import { useUrlContext } from '../hooks/useUrlContext';

// Img's imports
import br from "../assets/icons/br.svg";
import uk from "../assets/icons/uk.svg";

const Ul = styled.ul`
  position: fixed;
  top: -20px;
  right: 0;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.9s ease-in-out;
  height: 20vh;
  width: 150px;
  border-radius: 5%;
  background-color: #3f3f3f;
  display: flex;
  flex-flow: column;
  margin-top: 30px;
  padding: 0;
  padding-top: 35px;

  a{
    margin: 10px 0;
    padding: 0 10px;
    color: orange;
    text-decoration: none;
    color: #f00;
    flex-direction: column;
    font-weight: bolder;
    
    &:hover{
      color: #fff;
    }
  }
  
  .active{
    text-decoration: underline;
    color: #060;
  }
`

const Navbar = ({open}) => {
  const {url, dispatch } = useUrlContext();
  const {data, loading} = useFetch(url);
  const setUrl = (u) => {
    dispatch({type: u});
  }

  return (
    <Ul open={open}>
      {!loading && (<>
        <NavLink to="/new_portfolio/home" className={"btnHMenu"}>Home</NavLink>
        <NavLink to="/new_portfolio/personal" className={"btnHMenu"}>{data.personal}</NavLink>
        <NavLink to="/new_portfolio/professional"className={"btnHMenu"}>{data.professional}</NavLink>
        <div className='flags_lang_Menu'>
            <img src={br} alt="portuguese" className='flag_lang_Menu' onClick={() => setUrl("PT")}/>
            <img src={uk} alt="english" className='flag_lang_Menu'  onClick={() => setUrl("EN")}/>
        </div>
      </>)}
    </Ul>
  )
}

export default Navbar