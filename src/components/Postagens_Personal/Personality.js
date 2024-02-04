import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import photo from '../../assets/icons/avatarPersonality.svg'

const Personality = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes' id="personality">
        <h1>{data.typePersonality}</h1>
        <p className="descricao">{data.desPersonality1}</p>
        <p className="descricao">{data.desPersonality2}</p>
        <img src={photo} alt="foto" className='flag'/>
      </div>)}
    </>
  )
}

export default Personality