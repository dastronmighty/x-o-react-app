// src/app.js

import React, { useState } from "react";

import Settings from "./components/settings";
import Board from "./components/board/board";

import useApp from "./utils/useApp";

const App = () => {

  const { boardSize, resetBoard, tempBoardSize, handleSizeChange, handleSizeUpdate, resetCounter} = useApp()

  return (
    <div>
      <h1>Variable X and 0s</h1>
      <Settings 
        resetBoard={resetBoard} 
        tempBoardSize={tempBoardSize}
        handleSizeChange={handleSizeChange} 
        handleSizeUpdate={handleSizeUpdate}
      />
      <Board size={boardSize} resetCounter={resetCounter} />
    </div>
  );
};

export default App;