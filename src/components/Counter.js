import { useState } from "react";
export function Counter() {
  // const like = 5;
  const [like, setLike] = useState(0);
  const [dlike, setdLike] = useState(0);
  return (
    <div className="container">
      <button
        className="btn btn-primary mx-1"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍{like}
      </button>

      <button
        className="btn btn-primary mx-1"
        onClick={() => {
          setdLike(dlike - 1);
        }}
      >
        👎{dlike}
      </button>
    </div>
  );
}
