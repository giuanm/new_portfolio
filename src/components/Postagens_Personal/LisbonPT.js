import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import photo from '../../assets/icons/Lisbon.jpg'

const LisbonPT = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes'>
        <a href="https://drive.google.com/drive/folders/1D7EuNiGH8fSLiqvtP-qEN-7JSecQdS19?usp=drive_link" target="_blank" rel="noreferrer">
          <h1>{data.lisbon} - Portugal</h1>
        </a>
        <img src={photo} alt="foto" className='flag'/>
        <p className="descricao">{data.lisbonPT}</p>
      </div>)}
    </>
  )
}

export default LisbonPT