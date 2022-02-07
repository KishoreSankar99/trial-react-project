import { useState } from "react";
import "./App.css";

export default function App() {
  let arr = [{
    name:'RRR',
    img_link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6L2WmlrU5r2HzTKoXTJC5DFyU9vMbUJ79Cp5P7RB5QEEnXkH',
    rating:8.5,
    summary:'A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s.'
  },
  {
    name:'The Avengers',
    img_link:'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg',
    rating:9.2,
    summary:'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.'
  },
  {
    name:'Mayakkam Enna',
    img_link:'https://i.pinimg.com/originals/82/6c/5e/826c5e368936d8a2ac4894d60d63e56d.jpg',
    rating:7.1,
    summary:'Karthik is a wildlife photographer, who meets Yamini, his friends girlfriend, and gets married to her by a twist of fate. Their married life turns sour when Yamini has a miscarriage.'
  },
  {
    name:'Titanic',
    img_link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-oUFRn_Err2mBTIRXR0FEuTbjJXS687eoCXHBAVBZ-v8xyeJw',
    rating:9.5,
    summary:'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.'
  },
  {
    name:'3',
    img_link:'https://upload.wikimedia.org/wikipedia/en/d/d6/3_%282012_Tamil_film_soundtrack%29.jpg',
    rating:7.9,
    summary:'Ram and Janani are high school sweethearts who eventually get married. However, Janani is mystified when Ram commits suicide all of a sudden and she tries to find out the truth behind his death.'
  }
]
  let[movielist,setmovielist] = useState(arr)
  let[moviename, setmoviename] = useState('')
  let[poster,setposter] = useState('')
  let[rating,setrating] = useState('')
  let[summary,setsummary] = useState('')
  return (
    
    <div className="App">
      
      <div className="movieList">
        <div className="addMovie">
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
            setmovielist([...arr,movieObj])
          }
          }>ADD MOVIE</button>
        </div>
      {movielist.map((item)=>(<Movie name={item.name} img_link ={item.img_link} rating ={item.rating} summary ={item.summary}/>))}
      
     </div>
    </div>
  );
}

function Counter() {

let[like,setlike] = useState(0)
let[dislike,setdislike] = useState(0)
  return (
    <div className="counterContainer">
      <button className="likeDislike" onClick={()=>{setlike(like+1)}}>{like}👍</button>
      <button className="likeDislike" onClick={()=>{setdislike(dislike+1)}}>{dislike}👎</button>
    </div>
  );
}
function Movie({name,img_link,rating,summary}){
  let styles = {
    color: rating>=8.5 ? "green" : "red"
  }
  let [btn,setbtn] = useState(true)
  let [btnVal,setbtnVal] = useState('Hide')
  let btnstyle = {
    display: btn ? 'block' : 'none'
  }
  
  return <div className="movieContainer">
     <img src ={img_link} alt ='' className="moviePoster"></img>
    <div className="name-rating">
     <h1 className="movieName">{name}</h1 >
     <p style={styles} className="movieRating">⭐{rating}</p>
     </div>
     <button onClick={()=>{
       console.log('before',btn)
       setbtn(!btn)
       setbtnVal(()=> !btn ? 'Hide' : 'Show')
       console.log(btnVal)
      

     }}>{btnVal}</button>
     <p style={btnstyle} className="movieSummary">{summary}</p>  
     <Counter/>
  </div>
}

function ColorBox(){
  let [color,setColor] = useState('pink')
  let [temp,setTemp] = useState(null)
  let [colorlist ,setcolorlist]= useState(['red','green','yellow']);
   let styles1 = {
     background : color
   }
  return(
  <div>
    <input value={color} style={styles1} onChange = {(event)=> setColor(event.target.value)}  /><br/>
    
    <button onClick={()=>setcolorlist([...colorlist,color])}>Click Me</button>
    {colorlist.map((item,index)=><ColorBar key={index} color ={item} name = {item}/>)}
  </div>
  );
}
function ColorBar({color,name,index}){
  let style = {
    background: color,
    height:'25px',
    width:'175px'
  }
  console.log(color,index)
  return <div key={index} className="ColorBar" style = {style}>
   <p>{name}</p>
  </div>
}
function Crendering (){
  const res = 5>4 ?<h1>pugalenthi</h1> : <h1>aravindhan</h1>
   return (
       <div>
           <p>{res}</p>
       </div>
   )
}