import React from 'react'
import styled from 'styled-components';
// import {useFetch} from "../../hooks/useFetch";
// import { useUrlContext } from '../../hooks/useUrlContext';
import about from "../../assets/icons/aboutMe.svg";
import hobbies from "../../assets/icons/hobbies.svg";
import personality from "../../assets/icons/personality.svg";

//Import CSS
import './ListHobbies.css'

const StyledListMenuIcon = styled.section`
    margin-top: 30px;
    margin-left: -40px;
    div{
        display: ${({open}) => open ? 'none' : 'flex'};
        flex-direction: row;

        .iconMenu{
            width: 15px;
            margin-right: 10px;
        }
    
        li{
            font-weight: bold;
            font-size: 15px;
            list-style-type: none;
            margin: 10px 0;
            &:hover{
                color: #f00;
                cursor: pointer;
            }
        }
    }

`

const ListHobbies = ({open}) => {
    // const {url} = useUrlContext();
    // const {data} = useFetch(url);
    const handleClickScrollDance = () => {
        const element = document.getElementById('dance');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const handleClickScrollTravel = () => {
        const element = document.getElementById('trip');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleClickScrollNlp = () => {
        const element = document.getElementById('nlp');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <div>
        <StyledListMenuIcon open={!open}>
            <div>
                <img src={about} alt="about me" className='iconMenu' />
                <li onClick={handleClickScrollDance}>Dance</li>
            </div>
        </StyledListMenuIcon>
        <StyledListMenuIcon open={!open}>
            <div>
                <img src={hobbies} alt="hobbies" className='iconMenu' />        
                <li onClick={handleClickScrollNlp}>NLP</li>
            </div>
        </StyledListMenuIcon>
        <StyledListMenuIcon open={!open}>
            <div>
                <img src={personality} alt="personality" className='iconMenu' />        
                <li onClick={handleClickScrollTravel}>Travel</li>
            </div>
        </StyledListMenuIcon>
    </div>
  )
}

export default ListHobbies