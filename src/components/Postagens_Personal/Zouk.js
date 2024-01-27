import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';

const Zouk = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes'>
        <h1>Zouk</h1>
        <p className="descricao">{data.zouk}</p>
        <iframe className="videoHobbies" src="https://www.youtube.com/embed/Iik2HgGkf3I?si=DLOTdjE4uwQses_f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>)}
    </>
  )
}

export default Zouk