export function ColorBar({ color, name, index }) {
  let style = {
    background: color,
    height: '25px',
    width: '175px'
  };
  console.log(color, index);
  return (
    <div className="ColorBarOuter">
      <div key={index} className="ColorBar" style={style}>
      </div>
    </div>
  );
}
