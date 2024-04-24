
// Hooks & Components
import { useState } from 'react';
import {useFetch} from "../hooks/useFetch";
import IdentificationForm from '../components/IdentificationForm';
import { useUrlContext } from '../hooks/useUrlContext';

// Stylos
import styled from 'styled-components';
import './FirstPage.css'

// Img's imports
import br from "../assets/icons/br.svg";
import uk from "../assets/icons/uk.svg";
import conect from "../assets/img_language.jpg";
import FormDraw from "../assets/FormDraw.png";

const StyledLanguage = styled.section`
  width: 90%;
  height: 80%;
  position: fixed;
  top: 4%;
  right: 5%;
  background-color: #3f3f3f;
  border-radius: 0.6rem;
  box-shadow: 0px 5px 15px black, 2px 3px 8px red;
  display: ${({open}) => open ? 'flex' : 'none'};
  flex-direction: column;

  h2{
    margin: 40px auto;
    color: #fff;
  }
  .conect{
    margin: 30px auto;
    width: 90%;
    max-width: 750px;
    height: 90%;
    max-height: 250px;
    border-radius: 0.5rem;
  }
`

const First_Page = () => {
  const {url, dispatch } = useUrlContext();
  const {data, loading} = useFetch(url);
  
  const [open, setOpen] = useState(false);

  const setUrl = (u) => {
    dispatch({type: u});
    setOpen(!open);
  }

  return (
    <div className='mainFirstPage'>
      {/* Languages */}
      <StyledLanguage open={!open}>
        {loading && <p>Carregando dados da URL...</p>}
        {!loading && (<>
          <h2 className='titleLanguage'>Selecione o idioma <br/> Select the language</h2>
          <div className='flags_lang'>
            <img src={br} alt="portuguese" className='flag_lang' onClick={() => setUrl("PT")}/>
            <img src={uk} alt="english" className='flag_lang'  onClick={() => setUrl("EN")}/>
          </div>
          <img src={conect} alt="world_conect" className='conect'/>
        </>)}
      </StyledLanguage>
      {loading && <p>Carregando dados da URL...</p>}
      {!loading && (<>
        <section className='boxForm'>
          <p>{data.salutation}</p>
          <IdentificationForm />
        </section>
        <img src={FormDraw} alt="Draw" className='draw'/>
      </>)}
    </div>
  )
}

export default First_Page