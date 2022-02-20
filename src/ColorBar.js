export function ColorBar({ color, key,cdeletebtn }) {
  console.log(color)
  let style = {
    background: color,
    height: '25px',
    width: '175px'
  };
  let btnStyle = {
    height:'20px'
  }
  
  return (
    <div className="ColorBarOuter">
      <div key={key} className="ColorBar" style={style}>
        <p>{color}</p>
        {cdeletebtn}
        
      </div>
    </div>
  );
}
