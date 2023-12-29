import {NavLink} from 'react-router-dom'
import './Personal.css';
import teste1 from '../assets/favicon.jpg';

// Hooks imports
import Burger from '../components/Burger';
import Adsv from '../components/personal/Adsv';
import Atalhos from '../components/personal/Atalhos';
import ListShortcut from '../components/personal/ListShortcut';
import Posts from '../components/personal/Posts';

const Personal = () => {
  return (
    <div>
      <nav className='navPersonal'>
        <div className='menuPersonal'>
          <img src={teste1} alt="avatar" className='avatar'/>
          <ul className='atalhosNav'>
            <Atalhos />
          </ul>
        </div>
        <h1 className='navTitle'>Giuan Ferreira</h1>
        <ul className='listMenuPage'>
          <NavLink to="/new_portfolio/home">Home</NavLink>
          <NavLink to="/new_portfolio/personal">Pessoal</NavLink>
          <NavLink to="/new_portfolio/professional">Profissional</NavLink>
        </ul>
        <div className='burger'>
          <Burger />
        </div>
      </nav>
      <main className='mainPersonal'>
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

export default Personal