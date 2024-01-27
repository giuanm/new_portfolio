import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';

const Tango = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes'>
        <h1>Tango</h1>
        <p className="descricao">{data.tango}</p>
        <iframe className="videoHobbies" src="https://www.youtube.com/embed/AjOxBS1Gje4?si=qAAFdQQqvgEBENNF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>)}
    </>
  )
}

export default Tango