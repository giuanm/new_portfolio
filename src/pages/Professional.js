import {NavLink} from 'react-router-dom'
import './Professional.css';

// Components
import Burger from '../components/Burger';
import Adsv from '../components/Adsv';
import Atalhos from '../components/professional/Atalhos';
import ListShortcut from '../components/professional/ListShortcut';
import Posts from '../components/professional/Posts';

// Hooks imports
import { useClickMenuContext } from '../hooks/useClickMenuContext';
import {useFetch} from "../hooks/useFetch";
import { useUrlContext } from '../hooks/useUrlContext';

// Img's imports
import avatar from '../assets/favicon.png';
import br from "../assets/icons/br.svg";
import uk from "../assets/icons/uk.svg";

const Professional = () => {
    
  const {url, dispatch} = useUrlContext();
  const {data} = useFetch(url);
  const setUrl = (u) => {
    dispatch({type: u});
  }
  const {_click} = useClickMenuContext();

  return (
    <div>
      <nav className='navProfessional'>
      <div className='menuProfessional'>
        <img src={avatar} alt="avatar" className='avatar'/>
        <ul className='atalhosNav'>
          <Atalhos />
        </ul>
      </div>
      <h1 className='navTitle'>Giuan Ferreira</h1>
      <ul className='listMenuPage'>
        <NavLink to="/new_portfolio/home">Home</NavLink>
        <NavLink to="/new_portfolio/personal">{data.personal}</NavLink>
        <NavLink to="/new_portfolio/professional">{data.professional}</NavLink>
        <div className='flags_lang_MenuP'>
          <img src={br} alt="portuguese" className='flag_lang_MenuP' onClick={() => setUrl("PT")}/>
          <img src={uk} alt="english" className='flag_lang_MenuP'  onClick={() => setUrl("EN")}/>
        </div>
      </ul>
      <div className='burger'>
        <Burger />
      </div>
      </nav>
      <main className='mainProfessional'>
            {/* right side box */}
        <section className='atalhosProf'>
          <ListShortcut />
        </section>
            {/* left side box */}
        <section className='advertisingProf'>
            <Adsv />
        </section>
            {/* center side box */}
        <section className='corpoProf'>
          <Posts choose = {_click}/>
        </section>
      </main>

    </div>
  )
}

export default Professional