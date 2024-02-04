import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import photo from '../../assets/icons/NLP.jpeg'

const NLP = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes' id="nlp">
        <h1>{data.nlp}</h1>
        <p className="descricao">{data.nlpD1}</p>
        <p className="descricao">{data.nlpD2}</p>
        <ul>
          <li className="descricao">{data.nlpE1}</li>
          <li className="descricao">{data.nlpE2}</li>
          <li className="descricao">{data.nlpE3}</li>
          <li className="descricao">{data.nlpE4}</li>
          <li className="descricao">{data.nlpE5}</li>
        </ul>
        <img src={photo} alt="foto" className='flag'/>
      </div>)}
    </>
  )
}

export default NLP