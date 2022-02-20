import { useState } from "react";
import { ColorBar } from "./ColorBar";

export function ColorBox() {
  let [color, setColor] = useState('pink');
  let [temp, setTemp] = useState(null);
  let [colorlist, setcolorlist] = useState(['red', 'green', 'yellow']);
  let styles1 = {
    background: color
  };
  return (
    <div className="colorBox w3-center w3-animate-top">
      <input value={color} style={styles1} onChange={(event) => setColor(event.target.value)} /><br />

      <button onClick={() => setcolorlist([...colorlist, color])}>Click Me</button>
      {colorlist.map((item, index) =>{ 
      console.log(index)
      return <ColorBar key={index}
       color={item} 
       colorlist={colorlist} 
       setcolorlist={setcolorlist}
       cdeletebtn = {<button onClick={()=>{
         let copy = [...colorlist]
         copy.splice(index,1)
         setcolorlist(copy)
       }}>Delete</button>}
       />})}
    </div>
  );
}
