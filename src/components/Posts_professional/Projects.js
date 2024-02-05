import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import github from "../../assets/icons/icons8-github.gif";

const Projects = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes' id="project">
        <h1>{data.project}</h1>
        <p className="descricao">{data.projectDesc}</p>
        <img src={github} alt="foto" className='flag'/>
      </div>)}
    </>
  )
}

export default Projects