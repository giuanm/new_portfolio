import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import photo from '../../assets/icons/SecretWords.jpg'

const SecretWords = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes' id="trip">
        <a href="https://giuanm.github.io/Secret_Words/" target="_blank" rel="noreferrer">
          <h1>Secret Words</h1>
        </a>
        <a href="https://giuanm.github.io/Secret_Words/" target="_blank" rel="noreferrer">
          <img src={photo} alt="foto" className='flag'/>
        </a>
        <p className="descricao">{data.faroPT}</p>
        <a href="https://github.com/giuanm/Secret_Words" target="_blank" rel="noreferrer">
          <h3>GitHub</h3>
        </a>
      </div>)}
    </>
  )
}

export default SecretWords