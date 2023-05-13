// src/components/board/row.js

import React from "react";
import Square from "./square";

const Row = ({ row, turn, updateTurn, updateBoard, resetCounter, rowIdx, winner}) => (
  <div className="board-row">
    {row.map((col, colIdx) => (
      <Square
        key={colIdx}
        turn={turn}
        updateTurn={updateTurn}
        updateBoard={updateBoard}
        resetCounter={resetCounter}
        rowIdx={rowIdx}
        colIdx={colIdx}
        winner={winner}
      />
    ))}
  </div>
);

export default Row;