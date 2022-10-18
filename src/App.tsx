import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

const BODY_SIZE = 10;

const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_LEFT = 37;

const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

function App() {
  let interval: string | number | NodeJS.Timeout | undefined;
  const [currDirection, setCurrDirection] = useState(RIGHT);
  const [xDir, setXDir] = useState(BODY_SIZE);
  const [yDir, setYDir] = useState(BODY_SIZE);

  const handleKeyDown = (event: any) => {
    if (event.keyCode === KEY_LEFT) {
      setCurrDirection(LEFT);
    } else if (event.keyCode === KEY_RIGHT) {
      setCurrDirection(RIGHT);
    } else if (event.keyCode === KEY_UP) {
      setCurrDirection(UP);
    } else if (event.keyCode === KEY_DOWN) {
      setCurrDirection(DOWN);
    }
  };

  const move = () => {
    if (xDir > 0 && yDir > 0 && xDir < 290 && yDir < 390) {
      if (currDirection === RIGHT && xDir < 290) {
        setXDir((prev) => prev + BODY_SIZE);
      } else if (currDirection === LEFT && xDir > 0) {
        setXDir((prev) => prev - BODY_SIZE);
      } else if (currDirection === DOWN && yDir < 390) {
        setYDir((prev) => prev + BODY_SIZE);
      } else if (currDirection === UP && yDir > 0) {
        setYDir((prev) => prev - BODY_SIZE);
      }
    } else {
      clearInterval(interval);
      alert("You Louse");
    }
  };

  useEffect(() => {
    interval = setInterval(move, 100);
    return () => clearInterval(interval);
  }, [currDirection, xDir, yDir]);

  const Snake = useMemo(() => {
    // console.log(xDir, yDir);
    return (
      <div
        className="snake-body"
        style={{ marginLeft: `${xDir}px`, marginTop: `${yDir}px` }}
      ></div>
    );
  }, [xDir, yDir]);

  return (
    <div className="App" tabIndex={-1} onKeyDownCapture={handleKeyDown}>
      <div className="snake-container">{Snake}</div>

      {currDirection}
      <br />
    </div>
  );
}

export default App;
