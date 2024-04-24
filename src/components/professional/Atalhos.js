import { useState } from 'react';
import styled from 'styled-components';
import ListShortcut from './ListShortcut';
import teste1 from '../../assets/favicon.png';
// import { useClickMenuContext } from '../../hooks/useClickMenuContext';

const StyledShortCut1 = styled.ul`
    display: ${({open}) => open ? 'none' : 'flex'};
    flex-flow: column;

    @media only screen and (max-width: 870px){
        position: fixed;
        top: 70px;
        left: 3.5rem;
        color: #fff;
        padding: 0 20px;
        margin: -15px 0;
        background-color: #3f3f3f;
        border-radius: 10px;
    }
`;
const StyledLogo = styled.img`
    width: 40px;
    border-radius: 50%;
    box-shadow: 1px 1px 2px #fff, 3px 5px 8px #060;
    &:hover{
        cursor: pointer;
    }    
`
const Atalhos = () => {
    const [open, setOpen] = useState(false)
    // const {_click} = useClickMenuContext();

  return (
    <>
        <section className='shurtcut1'>
            <StyledLogo src={teste1} alt="" open={open} onClick={() => setOpen(!open)}/>
            <StyledShortCut1 open={!open}>
                <ListShortcut />
            </StyledShortCut1>
        </section>
    </>
  )
}

export default Atalhos