import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';

const Malta = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes'>
        <a href="https://www.google.com/search?sca_esv=602020555&sxsrf=ACQVn0_HQ0wz0H_N-17bXtIRM69BL6m0Jg:1706376371971&q=malta&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjBiYSsi_6DAxXFQfEDHS7KBbMQ0pQJegQIDRAB&biw=1536&bih=730&dpr=1.25" target="_blank" rel="noreferrer">
          <h1>Malta</h1>
        </a>
        <p className="descricao">{data.malta}</p>
        <h3>St. Julian's</h3>
        <iframe className="videoHobbies" src="https://www.youtube.com/embed/R7gOuTsblSk?si=6h2MayDIC079UhKV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>Comino</h3>
        <iframe className="videoHobbies" src="https://www.youtube.com/embed/4fTUSK0R_T8?si=LnO1ixupoy95E4WB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>)}
    </>
  )
}

export default Malta