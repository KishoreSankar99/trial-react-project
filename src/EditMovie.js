import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export function EditMovie({ movielist, setmovielist }) {
  let {id} = useParams();
  let movie = movielist[id]
  let [moviename, setmoviename] = useState(movie.name);
  let [poster, setposter] = useState(movie.img_link);
  let [rating, setrating] = useState(movie.rating);
  let [summary, setsummary] = useState(movie.summary);
  let history = useHistory();
 
  console.log(movie)
  return <div className="addMovie w3-center w3-animate-bottom">

    <h2>Edit Movie</h2>
    <input placeholder="Enter Movie name here" value={moviename} onChange={(event) => setmoviename(event.target.value)} />
    <input placeholder="Enter Poster link here" value={poster} onChange={(event) => setposter(event.target.value)} />
    <input placeholder="Enter Movie Rating here" value={rating} onChange={(event) => setrating(event.target.value)} />
    <input placeholder="Enter Movie Summary here" value={summary} onChange={(event) => setsummary(event.target.value)} />
    <button onClick={() => {
      let movieObj = {
        name: moviename,
        img_link: poster,
        rating: rating,
        summary: summary
      };
      console.log(movieObj);
      let copy = [...movielist]
      copy.splice(id,1,movieObj)
      setmovielist(copy)
      history.push('/movie');
    }}>Save</button>
  </div>;
}