import {React, useState} from 'react'
import styled from 'styled-components';
import ListHobbies from './ListHobbies';

const StyledHobby = styled.li`
    font-weight: bold;
    font-size: 15px;
    list-style-type: none;
    margin: 10px 0;
    &:hover{
        color: #f00;
        cursor: pointer;
    }
`

const Hobbies = () => {
    const [open, setOpen] = useState(false)

  return (
    <>
        <StyledHobby open={open} onClick={() => setOpen(!open)}>
            Hobbies
        </StyledHobby>
        <ListHobbies open={open}/>
    </>
  )
}

export default Hobbies