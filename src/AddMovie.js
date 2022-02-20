import { useState } from "react";
import { useHistory } from "react-router-dom";

export function AddMovie({ movielist, setmovielist }) {
  let [moviename, setmoviename] = useState('');
  let [poster, setposter] = useState('');
  let [rating, setrating] = useState('');
  let [summary, setsummary] = useState('');
  let history = useHistory();
  return <div className="addMovie w3-center w3-animate-bottom">

    <h2>Add Movie</h2>
    <input placeholder="Enter Movie name here" onChange={(event) => setmoviename(event.target.value)} />
    <input placeholder="Enter Poster link here" onChange={(event) => setposter(event.target.value)} />
    <input placeholder="Enter Movie Rating here" onChange={(event) => setrating(event.target.value)} />
    <input placeholder="Enter Movie Summary here" onChange={(event) => setsummary(event.target.value)} />
    <button onClick={() => {
      let movieObj = {
        name: moviename,
        img_link: poster,
        rating: rating,
        summary: summary
      };
      console.log(movieObj);
      setmovielist([...movielist, movieObj]);
      history.push('/movie');
    }}>ADD MOVIE</button>
  </div>;
}
