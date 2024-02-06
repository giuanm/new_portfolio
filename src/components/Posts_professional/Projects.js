import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import github from '../../assets/icons/Project.jpg';

const Projects = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes' id="project">
        <h1>{data.project}</h1>
        <img src={github} alt="foto" className='flag'/>
        <p className="descricao">{data.projectDesc}</p>
      </div>)}
    </>
  )
}

export default Projects