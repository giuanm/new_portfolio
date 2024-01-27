import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';

const Dublin = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes'>
        <a href="https://drive.google.com/drive/folders/1kL796hijfGCBkXMWNbXh7IQjocpF4rKI?usp=drive_link" target="_blank" rel="noreferrer">
          <h1>Dublin</h1>
        </a>
        <p className="descricao">{data.dublin}</p>
        <iframe className="videoHobbies" src="https://www.youtube.com/embed/wIQsl64KgNI?si=nN8RdpZBzdwrvOoG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>)}
    </>
  )
}

export default Dublin