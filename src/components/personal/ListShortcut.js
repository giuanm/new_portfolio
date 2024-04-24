import styled from 'styled-components';
// Hooks
import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import { useClickMenuContext } from '../../hooks/useClickMenuContext'

// Images
import about from "../../assets/icons/aboutMe.svg";
import hobbies from "../../assets/icons/hobbies.svg";
import personality from "../../assets/icons/personality.svg";

import {NavLink} from 'react-router-dom'

const StyledListMenuIcon = styled.div`
    display: flex;
    flex-direction: row;
    width: 130px;
    margin: 10px;
    
    h4{
        margin: 0;
        color: #f00;
    }
    .iconMenu{
        width: 15px;
        margin-right: 10px;
    }
    button{
        font-weight: bold;
        font-size: 15px;
        list-style-type: none;
        color: #fff;
        border: none;
        background-color: transparent;
        &:hover{
            color: #f00;
            cursor: pointer;
        }
    }
`

const ListShortcut = () => {
    const {dispatch} = useClickMenuContext();
    const {url} = useUrlContext();
    const {data} = useFetch(url);
    // const [click, setClick] =useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const click = e.target.value
        // console.log(`${click} da raiz`)
        dispatch({type: "user", value: click})
    }
    
  return (
    <>
        <StyledListMenuIcon>
            <img src={about} alt="about me" className='iconMenu' />
            <button onClick={handleSubmit} value={"general"}>{data.aboutme_camp}</button>
        </StyledListMenuIcon>
        {/* <StyledListMenuIcon>
            <img src={personality} alt="personality" className='iconMenu' />
            <button onClick={handleSubmit} value={"general"}>{data.personality}</button>
        </StyledListMenuIcon> */}
        <h4 style={{margin: '5px', color:'#f00'}}>Hobbies</h4>
        <StyledListMenuIcon>
            <img src={hobbies} alt="Dance" className='iconMenu' />
            <button onClick={handleSubmit} value={"dance"}>Dance</button>
        </StyledListMenuIcon>
        <StyledListMenuIcon>
            <img src={hobbies} alt="NLP" className='iconMenu' />
            <span >NLP</span>
        </StyledListMenuIcon>
        <StyledListMenuIcon>
            <img src={personality} alt="Travel" className='iconMenu' />
            <button onClick={handleSubmit} value={"travel"}>Travel</button>
        </StyledListMenuIcon>
        <NavLink to="/new_portfolio/createPost" style={{margin: '5px', color:'#20ac00', textDecoration: 'none'}}>Add Post</NavLink>
    </>
  )
}

export default ListShortcut