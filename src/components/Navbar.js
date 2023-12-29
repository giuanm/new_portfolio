import styled from 'styled-components'

import {NavLink} from 'react-router-dom'

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
  return (
    <Ul open={open}>
      <NavLink to="/new_portfolio/home">Home</NavLink>
      <NavLink to="/new_portfolio/personal">Pessoal</NavLink>
      <NavLink to="/new_portfolio/professional">Profissional</NavLink>
    </Ul>
  )
}

export default Navbar