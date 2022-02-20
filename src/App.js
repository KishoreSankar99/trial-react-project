import { useState ,Fragment} from "react";
import "./App.css";
import { Switch, Route, Link} from "react-router-dom";
import { MovieList } from "./MovieList";
import { ColorBox } from "./ColorBox";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";

export default function App() {
  let arr = [ {
    name:'RRR',
    img_link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6L2WmlrU5r2HzTKoXTJC5DFyU9vMbUJ79Cp5P7RB5QEEnXkH',
    rating:8.5,
    src:'https://www.youtube.com/embed/oO8TTM2FgIA',
    summary:'A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s.'
  },
  {
    name:'The Avengers',
    img_link: 'https://thumbs.gfycat.com/BelatedWindyCentipede-max-1mb.gif',
    src:'https://www.youtube.com/embed/eOrNdBpGMv8',
    rating:9.2,
    summary:'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
  },
  {
    name:'Mayakkam Enna',
    img_link:'https://i.pinimg.com/originals/82/6c/5e/826c5e368936d8a2ac4894d60d63e56d.jpg',
    src:'https://www.youtube.com/embed/Ze0-bPezwv4',
    rating:7.1,
    summary:'Karthik is a wildlife photographer, who meets Yamini, his friends girlfriend, and gets married to her by a twist of fate. Their married life turns sour when Yamini has a miscarriage.'
  },
  {
    name:'Titanic',
    img_link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oUFRn_Err2mBTIRXR0FEuTbjJXS687eoCXHBAVBZ-v8xyeJw',
    rating:9.5,
    src:'https://www.youtube.com/embed/kVrqfYjkTdQ',
    summary:'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.'
  },
  {
    name:'3',
    src:'https://www.youtube.com/embed/2oUPKuhoSdA',
    img_link:'https://upload.wikimedia.org/wikipedia/en/d/d6/3_%282012_Tamil_film_soundtrack%29.jpg',
    rating:7.9,
    summary:'Ram and Janani are high school sweethearts who eventually get married. However, Janani is mystified when Ram commits suicide all of a sudden and she tries to find out the truth behind his death.'
  }
]
  let[movielist,setmovielist] = useState(arr)
  
  
  return (
    <Fragment>
       
    
    
    <div className="App">
        
         <div className="router">
           
             <Link to='/'>Home</Link>
           
           
             <Link to='/movie' >Movie</Link>
           
          
             <Link to='/game'>Game</Link>
           
           
             <Link to ='/addmovie'>Add Movie</Link>
           
           
           </div>
       <Switch>
         <Route exact path="/">
           <div className="home">
           <h1 className="w3-container w3-center w3-animate-left">Home</h1>
           </div>
         </Route>

         <Route path="/movies/edit/:id">
         <EditMovie movielist={movielist} setmovielist = {setmovielist}/>
         </Route>

         <Route path='/movies/:id'>
           <MovieDetails movielist={movielist}/>
         </Route>

         <Route exact path="/movie">
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
        
         

       </Switch>
         
    
     </div>
     
     
     </Fragment>
    
  );
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