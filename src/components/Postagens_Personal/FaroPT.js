import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import photo from '../../assets/icons/Faro.jpg'

const FaroPT = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes' id="trip">
        <a href="https://drive.google.com/drive/folders/1JYx4OghrYD_T8NlEdE642PQuTT1TOON5?usp=drive_link" target="_blank" rel="noreferrer">
          <h1>Faro - Portugal</h1>
        </a>
        <img src={photo} alt="foto" className='flag'/>
        <p className="descricao">{data.faroPT}</p>
      </div>)}
    </>
  )
}

export default FaroPT