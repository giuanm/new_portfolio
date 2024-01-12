import React from 'react'
import styled from 'styled-components';
import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import about from "../../assets/icons/aboutMe.svg";
import hobbies from "../../assets/icons/hobbies.svg";
import personality from "../../assets/icons/personality.svg";
import Hobbies from './Hobbies';

const StyledListMenuIcon = styled.div`
    display: flex;
    flex-direction: row;
    width: 130px;
    
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
`

const ListShortcut = () => {
    const {url} = useUrlContext();
    const {data} = useFetch(url);
    
  return (
    <>
        <StyledListMenuIcon>
            <img src={about} alt="about me" className='iconMenu' />
            <li>{data.aboutme_camp}</li>
        </StyledListMenuIcon>
        <StyledListMenuIcon>
            <img src={personality} alt="personality" className='iconMenu' />        
            <li>{data.personality}</li>
        </StyledListMenuIcon>
        <StyledListMenuIcon>
            <img src={hobbies} alt="hobbies" className='iconMenu' />        
            <Hobbies />
        </StyledListMenuIcon>
    </>
  )
}

export default ListShortcut