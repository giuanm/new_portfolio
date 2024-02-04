import {NavLink} from 'react-router-dom'
import './Professional.css';
import avatar from '../assets/favicon.jpg';


// Hooks imports
import Burger from '../components/Burger';
import Adsv from '../components/personal/Adsv';
import Atalhos from '../components/personal/Atalhos';
import ListShortcut from '../components/professional/ListShortcut';
import Posts from '../components/professional/Posts';

import {useFetch} from "../hooks/useFetch";
import { useUrlContext } from '../hooks/useUrlContext';

const Professional = () => {
    
  const {url} = useUrlContext();
  const {data} = useFetch(url);

  return (
    <div>
            <nav className='navPersonal'>
        <div className='menuPersonal'>
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
        </ul>
        <div className='burger'>
          <Burger />
        </div>
      </nav>
      <br />
      <br />
      <br />
      <br />

      <h3>Em construção, favor acessar aqui <a href="https://giuanm.github.io/js-developer-portfolio/#">Portifólio</a></h3>
      <h3>Under construction, please access here <a href="https://giuanm.github.io/js-developer-portfolio/#">Portfolio</a></h3>
    
      <main className='mainProfessional'>
            {/* right side box */}
        <section className='atalhos'>
          <ListShortcut />
        </section>
            {/* left side box */}
        <section className='advertising'>
            <Adsv />
        </section>
            {/* center side box */}
        <section className='corpo'>
          <Posts />
        </section>
      </main>
    
    </div>
  )
}

export default Professional