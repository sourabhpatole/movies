import React from "react";
import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
export function Game() {
  const { width, height } = useWindowSize();
  const [boarda, setBoarda] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXtrun, setIsXtrun] = useState();

  const handelclick = (index) => {
    console.log("clicked", index);

    if (!winner && !boarda[index]) {
      const boardCopy = [...boarda];
      boardCopy[index] = isXtrun ? "X" : "O";
      setBoarda(boardCopy);
      setIsXtrun(!isXtrun);
    }
  };
  const decidewinner = (boarda) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        boarda[a] !== null &&
        boarda[a] === boarda[b] &&
        boarda[a] === boarda[c]
      ) {
        console.log("Winner is", boarda[a]);
        return boarda[a];
      }
    }
    return null;
  };
  const winner = decidewinner(boarda);
  return (
    <div className="container">
      <button onClick={() => isXtrun}>X select</button>
      <button onClick={() => !isXtrun}>O select</button>
      <button>{isXtrun ? "X turn" : "O turn"} </button>
      <div className="board container my-2">
        {boarda.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handelclick(index)} />
        ))}
      </div>
      {winner ? <h2 className="container">Winner is {winner}</h2> : " "}
      {winner ? (
        <Confetti width={width} height={height} numberOfPieces={500} />
      ) : (
        ""
      )}
      {winner ? (
        <button
          onClick={() =>
            setBoarda([null, null, null, null, null, null, null, null, null])
          }
        >
          Restart
        </button>
      ) : (
        ""
      )}
    </div>
  );

  function GameBox({ val, onPlayerClick }) {
    // const val = "X";
    // const [val, setVal] = useState(null);
    const styles = { color: val === "X" ? "green" : "red" };
    return (
      <div style={styles} onClick={() => onPlayerClick()} className="game-box">
        {val}
      </div>
    );
  }
}
