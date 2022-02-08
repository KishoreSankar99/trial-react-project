import { Movie } from "./Movie";

export function MovieList({ movielist ,setmovielist}) {
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
        />))}
  </div>;
}
