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
    <div className="colorBox">
      <input value={color} style={styles1} onChange={(event) => setColor(event.target.value)} /><br />

      <button onClick={() => setcolorlist([...colorlist, color])}>Click Me</button>
      {colorlist.map((item, index) => <ColorBar key={index} color={item} name={item} />)}
    </div>
  );
}
