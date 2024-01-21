import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';

const Bachata = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes'>
        <h1>Bachata</h1>
        <p>{data.bachata}</p>
        <iframe className="videoHobbies" src="https://www.youtube.com/embed/mYEp8BmXb5o?si=w6FxTpA9SfZJ_EqP" fs="1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>)}
    </>
  )
}

export default Bachata