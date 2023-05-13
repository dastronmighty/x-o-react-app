// src/utils/useApp.js

import { useState } from "react";

const useApp = () => {
  const [resetCounter, setResetCounter] = useState(0);
  const [boardSize, setBoardSize] = useState(3);
  const [tempBoardSize, setTempBoardSize] = useState(boardSize); // new temporary state variable for the board size
  
  const resetBoard = () => {
    setResetCounter((prevState) => prevState + 1);
  };

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setTempBoardSize(newSize); // store the new size in the temporary state variable
  };

  const handleSizeUpdate = () => {
    setBoardSize(tempBoardSize); // update the actual state variable with the new siz
    resetBoard();
  };

  return {
    boardSize,
    resetBoard,
    tempBoardSize,
    handleSizeChange,
    handleSizeUpdate,
    resetCounter
  }
}

export default useApp;