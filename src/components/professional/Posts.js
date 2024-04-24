import ImagePost from './imagens'
import VideoPost from './videos'

// Hooks' import
import { useGeneral } from '../../hooks/useGeneralProf';
import { useProject } from '../../hooks/useProject';
import { useExperience } from '../../hooks/useExperience';
import {useFetch} from "../../hooks/useFetch";
import { useUrlContext } from '../../hooks/useUrlContext';
import { useCreateDB } from '../../hooks/useCreateDB'

const Posts = ({choose}) => {
  useCreateDB()
  
  const {url } = useUrlContext();
  const {data, loading} = useFetch(url);

  let arr = localStorage.getItem("post_professional")
  if(data.intro1 !== "Olá"){
    arr = localStorage.getItem("post_professional_eng")
  }

  const post = JSON.parse(arr)
  const general = useGeneral(data)
  const project = useProject(data)
  const experience = useExperience(data)
  let render_post = []

  if(!choose || choose === "general"){
    render_post = [...general, ...post.general]
  } else if(choose === "project"){
    render_post = [...project, ...post.project]
  } else if(choose === "experience"){
    render_post = [...experience, ...post.experience]
  }

  return (<>
    {/* Loading */}
    {loading && <p>Carregando dados da URL...</p>}
    {!loading && (
      <div>
        {render_post.map((post) => {
          if(post.type_media === "img") {
            return (
              <div key={post.id}>
                <ImagePost
                  name = {post.name}
                  media = {post.media}
                  url = {post.URLmedia}
                  id = {post.id}
                  description = {post.description}
                  type = {choose}
                />
              </div>
            );
          } else if (post.type_media === "video") {
            return (
              <div key={post.id}>
                <VideoPost
                  name = {post.name}
                  media = {post.media}
                  url = {post.URLmedia}
                  id = {post.id}
                  description = {post.description}
                  type = {choose}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    )} 
  </>)
}

export default Posts