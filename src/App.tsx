import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Snake from "snake-game-react";

function App() {
  return (
    <div className="App" tabIndex={-1}>
      <Snake color1="#248ec2" color2="#1d355e" backgroundColor="#ebebeb" />
    </div>
  );
}

export default App;
