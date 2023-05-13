// src/components/board/row.tsx

import React from "react";
import Square from "./square";

interface rowProps {
  row: number[],
  turn: string,
  updateTurn: () => void,
  updateBoard: (col: number, row: number) => void,
  resetCounter: number,
  rowIdx: number,
  winner: string,
}

const Row: React.FC<rowProps> = ({ 
  row,
  turn,
  updateTurn,
  updateBoard,
  resetCounter,
  rowIdx,
  winner
}) => (
  <div className="board-row">
    {row.map((col, colIdx) => (
      <Square
        key={colIdx}
        colIdx={colIdx}
        rowIdx={rowIdx}
        turn={turn}
        updateTurn={updateTurn}
        updateBoard={updateBoard}
        resetCounter={resetCounter}
        winner={winner}
      />
    ))}
  </div>
);

export default Row;