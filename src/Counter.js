import { useState } from "react";

export function Counter() {

  let [like, setlike] = useState(0);
  let [dislike, setdislike] = useState(0);
  return (
    <div className="counterContainer">
      <button className="likeDislike" onClick={() => { setlike(like + 1); }}>{like}👍</button>
      <button className="likeDislike" onClick={() => { setdislike(dislike + 1); }}>{dislike}👎</button>
    </div>
  );
}
