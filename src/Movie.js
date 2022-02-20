import { useState } from "react";
import { Counter } from "./Counter";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function Movie({ name, img_link, rating, summary ,deleteButton,id,editButton}) {
  let styles = {
    color: rating >= 8.5 ? "green" : "red"
  };
  let history = useHistory();
  let [btn, setbtn] = useState(true);
  let [btnVal, setbtnVal] = useState('Hide');
  let btnstyle = {
    display: btn ? 'block' : 'none'
  };
  return <div className="movieContainer">
    <img src={img_link} alt='' className="moviePoster"></img>
    <div  className="name-rating">
      <h2 className="movieName">{name}</h2>
      <p style={styles} className="movieRating">⭐{rating}</p>
    </div>
    <button onClick={() => {
      console.log('before', btn);
      setbtn(!btn);
      setbtnVal(() => !btn ? 'Hide' : 'Show');
      console.log(btnVal);


    }}>{btnVal}</button>
    <button onClick={()=>history.push(`/movies/${id}`)}>Info</button>
    <p style={btnstyle} className="movieSummary">{summary}</p>
    <Counter />
    {deleteButton}
    {editButton}
  </div>;
}
