import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import photo from '../../assets/icons/london.jpg'

const London = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes'>
        <a href="https://drive.google.com/drive/folders/1twBaJEcHoDDe7rs9_pHagPqlZnPnahEQ?usp=drive_link" target="_blank" rel="noreferrer">
          <h1>{data.london} - UK</h1>
        </a>
        <img src={photo} alt="foto" className='flag'/>
        <p className="descricao">{data.londonDesc}</p>
      </div>)}
    </>
  )
}

export default London