import { Movie } from "./Movie";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function MovieList({ movielist ,setmovielist}) {
  let history = useHistory();
  return <div className="movieList">
    {movielist.map(({name,img_link,rating,summary},index) => (
      <Movie 
        key={index}
        name={name}
        img_link={img_link}
        rating={rating}
        summary={summary}
        id = {index}
        deleteButton = {<button onClick={()=>{
            let copyMovielist = [...movielist]
            copyMovielist.splice(index,1)
            setmovielist(copyMovielist)
            console.log(index)}}>Delete</button>}

        editButton = {<button onClick={()=>history.push(`/movies/edit/${index}`)}> edit </button>

        }    
            
        />))}
  </div>;
}
