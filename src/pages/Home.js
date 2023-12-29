import './Home.css';
import { NavLink } from 'react-router-dom';

// Hooks' import
import {useFetch} from "../hooks/useFetch";
import { useSoft } from '../hooks/useSoftSkills';
import { useHard } from '../hooks/useHardSkills';
import { useUrlContext } from '../hooks/useUrlContext';
import { useInfoUserContext } from '../hooks/useInfoUserContext';


function Home() {

  const {_name} = useInfoUserContext()
  const {url } = useUrlContext();
  const {data, loading, error} = useFetch(url);

  const softSkills = useSoft(data);
  const hardSkills = useHard(data)

  return (
    <div>
      {/* Loading */}
      {loading && <p>Carregando dados da URL...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <main className='mainHome'>
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
              <NavLink to="/new_portfolio/professional">{data.professional}</NavLink>
              <NavLink to="/new_portfolio/personal">{data.personal}</NavLink>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default Home