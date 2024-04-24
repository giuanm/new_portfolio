import './Home.css';
import { NavLink } from 'react-router-dom';

// Hooks' import
import {useFetch} from "../hooks/useFetch";
import { useSoft } from '../hooks/useSoftSkills';
import { useHard } from '../hooks/useHardSkills';
import { useUrlContext } from '../hooks/useUrlContext';
import { useInfoUserContext } from '../hooks/useInfoUserContext';

// Img's imports
import br from "../assets/icons/br.svg";
import uk from "../assets/icons/uk.svg";

function Home() {

  const {_name} = useInfoUserContext()
  const {url, dispatch } = useUrlContext();
  const {data, loading, error} = useFetch(url);
  const softSkills = useSoft(data);
  const hardSkills = useHard(data);
  const setUrl = (u) => {
    dispatch({type: u});
  }

  return (
    <div>
      {/* Loading */}
      {loading && <p>Carregando dados da URL...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <main className='mainHome'>
          <div className='flags_lang_home'>
            <img src={br} alt="portuguese" className='flag_lang' onClick={() => setUrl("PT")}/>
            <img src={uk} alt="english" className='flag_lang'  onClick={() => setUrl("EN")}/>
          </div>
          <header className='header'>
            <img src={data.photo} alt="minha foto" className='photo'/>
            <section className='intro'>
              <h2>{data.intro1} {_name}, <br/> {data.intro2} {data.name}!</h2>
              <h3>{data.job}</h3>
            </section>
          </header>
          <section className='HardSkills'>
            <h3>HardSkills</h3>
            <ul>
              {hardSkills.map((skill) =>(
                <div className='hardDetalls' key={skill.name}>
                  <img src={skill.logo} alt='logoskill' className='logoSkill'/>
                  <li>
                    {skill.name}
                  </li>
                </div>
              ))}
            </ul>
          </section>
          <section className='SoftSkills'>
            <h3>SoftSkills</h3>
            <div>
              <ul>
                {softSkills.map((skill) =>(
                  <li key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className='targeting'>
            <h4>{data.targetingMsg}</h4>
            <div className='pages'>
              <NavLink to="/new_portfolio/personal">{data.personal}</NavLink>
              <NavLink to="/new_portfolio/professional">{data.professional}</NavLink>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default Home