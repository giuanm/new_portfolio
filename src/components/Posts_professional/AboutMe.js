import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';


const AboutMe = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes' id="about">
        <h1>{data.intro1}, {data.intro2} {data.name}</h1>
        <p className="descricao">{data.aboutmeProfessional}</p>
        <img src={data.photo} alt="foto" className='flag'/>
      </div>)}
    </>
  )
}

export default AboutMe