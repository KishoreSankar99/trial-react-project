import { useState } from "react";
import "./App.css";
import { Switch, Route, Link ,useHistory} from "react-router-dom";
import { MovieList } from "./MovieList";
import { ColorBox } from "./ColorBox";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  let arr = [ {
    name:'RRR',
    img_link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6L2WmlrU5r2HzTKoXTJC5DFyU9vMbUJ79Cp5P7RB5QEEnXkH',
    rating:8.5,
    src:'https://www.youtube.com/embed/eOrNdBpGMv8',
    summary:'A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s.'
  },
  {
    name:'The Avengers',
    img_link:'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg',
    src:'https://www.youtube.com/embed/eOrNdBpGMv8',
    rating:9.2,
    summary:'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
  },
  {
    name:'Mayakkam Enna',
    img_link:'https://i.pinimg.com/originals/82/6c/5e/826c5e368936d8a2ac4894d60d63e56d.jpg',
    src:'https://www.youtube.com/embed/eOrNdBpGMv8',
    rating:7.1,
    summary:'Karthik is a wildlife photographer, who meets Yamini, his friends girlfriend, and gets married to her by a twist of fate. Their married life turns sour when Yamini has a miscarriage.'
  },
  {
    name:'Titanic',
    img_link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oUFRn_Err2mBTIRXR0FEuTbjJXS687eoCXHBAVBZ-v8xyeJw',
    rating:9.5,
    src:'https://www.youtube.com/embed/eOrNdBpGMv8',
    summary:'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.'
  },
  {
    name:'3',
    src:'https://www.youtube.com/embed/eOrNdBpGMv8',
    img_link:'https://upload.wikimedia.org/wikipedia/en/d/d6/3_%282012_Tamil_film_soundtrack%29.jpg',
    rating:7.9,
    summary:'Ram and Janani are high school sweethearts who eventually get married. However, Janani is mystified when Ram commits suicide all of a sudden and she tries to find out the truth behind his death.'
  }
]
  let[movielist,setmovielist] = useState(arr)
  
  return (
    
    <div className="App">
        
         <div className="router">
           
             <Link to='/'>Home</Link>
           
           
             <Link to='/movie' >Movie</Link>
           
          
             <Link to='/game'>Game</Link>
           
           
             <Link to ='/addmovie'>Add Movie</Link>
           
           
           </div>
       <switch>
         <Route exact path="/">
           <div className="home">
           <h1 className="w3-container w3-center w3-animate-left">Home</h1>
           </div>
         </Route>
         <Route path='/movies/:id'>
           <MovieDetails movielist={movielist}/>
         </Route>
         <Route path="/movie">
         <div>
          
         <MovieList movielist={movielist} setmovielist = {setmovielist}/>
         
        
        </div>
        </Route>

        <Route path='/addmovie'>
          <div>
          
        <AddMovie movielist={movielist} setmovielist = {setmovielist}/>
        </div>
        </Route>
        
         <Route path="/game">
           <ColorBox/>
         </Route>
        
         

       </switch>
         
     </div>
    
  );
}
function AddMovie({movielist,setmovielist}){
  let[moviename, setmoviename] = useState('')
  let[poster,setposter] = useState('')
  let[rating,setrating] = useState('')
  let[summary,setsummary] = useState('')
  let history = useHistory();
   return <div className="addMovie w3-container w3-center w3-animate-bottom">
    
   <h2>Add Movie</h2>
   <input placeholder="Enter Movie name here" onChange={(event)=>setmoviename(event.target.value)}/>
   <input placeholder="Enter Poster link here" onChange={(event)=>setposter(event.target.value)}/>
   <input placeholder="Enter Movie Rating here" onChange={(event)=>setrating(event.target.value)}/>
   <input placeholder="Enter Movie Summary here" onChange={(event)=>setsummary(event.target.value)}/>
   <button onClick={()=>{
     let movieObj = {
       name:moviename,
       img_link: poster,
       rating:rating,
       summary:summary
     }
     console.log(movieObj)
     setmovielist([...movielist,movieObj])
     history.push('/movie')
   }
   }>ADD MOVIE</button>
   </div>
}

function MovieDetails({movielist}){
  let {id} = useParams();
  console.log(movielist[id])
  let movie =  movielist[id]
  return(
    <div>
      <iframe width="100%" height="409" src={movie.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="trailerSummary">
      <h3>{movie.name}</h3>
      <p>{movie.summary}</p>
      </div>
    </div>
  )
}