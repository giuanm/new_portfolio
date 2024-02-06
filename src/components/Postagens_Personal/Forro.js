import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';

const Forro = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes'>
        <h1>Forró</h1>
        <iframe className="videoHobbies" src="https://www.youtube.com/embed/mYa03J9MfqA?si=Kt_oR5Tchq7vsU0G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p className="descricao">{data.forro}</p>
      </div>)}
    </>
  )
}

export default Forro