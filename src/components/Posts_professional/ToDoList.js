import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import photo from '../../assets/icons/TodoList.jpg'

const ToDOList = () => {
    const {url} = useUrlContext();
    const {data, loading} = useFetch(url);
  return (
    <>
      {!loading && (<div className='postes' id="trip">
        <a href="https://giuanm.github.io/ToDoList/" target="_blank" rel="noreferrer">
          <h1>ToDo List</h1>
        </a>
        <a href="https://giuanm.github.io/ToDoList/" target="_blank" rel="noreferrer">
          <img src={photo} alt="foto" className='flag'/>
        </a>
        <a href="https://github.com/giuanm/ToDoList" target="_blank" rel="noreferrer">
        <p className="descricao">{data.faroPT}</p>
          <h3>GitHub</h3>
        </a>
      </div>)}
    </>
  )
}

export default ToDOList