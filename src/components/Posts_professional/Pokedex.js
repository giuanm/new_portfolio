import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import photo from '../../assets/icons/Pokedex.jpg'

const Pokedex = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes' id="trip">
        <a href="https://giuanm.github.io/Pokedex/" target="_blank" rel="noreferrer">
          <h1>Pokedex</h1>
        </a>
        <a href="https://giuanm.github.io/Pokedex/" target="_blank" rel="noreferrer">
          <img src={photo} alt="foto" className='flag'/>
        </a>
        <p className="descricao">{data.pokedexDesc}</p>
        <a href="https://github.com/giuanm/Pokedex" target="_blank" rel="noreferrer">
          <h3>GitHub</h3>
        </a>
      </div>)}
    </>
  )
}

export default Pokedex