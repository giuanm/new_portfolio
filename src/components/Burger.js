import {React, useState} from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    margin-right: 2rem;
    display: flex;
    flex-flow: column nowrap;
    z-index: 2;
    
    &:hover{
        cursor: pointer;
    }
    div {
        width: 2rem;
        height: 2rem;
        background-color: ${({open}) => open ? '#060' : '#f00'};
        border-radius: 10px;
        margin-bottom: 5px;
        transform-origin: 1px;
        transition:all 0.3s linear;

        &:nth-child(1){
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'}
        }

        &:nth-child(2){
            width: ${({open}) => open ? '2rem' : '1.5rem'};
            background-color: #060;
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity:  ${({open}) => open ? 0 : 1};
        }

        &:nth-child(3){
            width: ${({open}) => open ? '2rem' : '1rem'};
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'}
        }
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false)

  return (
    <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <Navbar open={open} />
    </>
  )
}

export default Burger