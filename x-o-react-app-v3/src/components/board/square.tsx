// src/components/board/square.tsx

import React, { useState, useEffect } from "react";
import "../../styles/square.scss";

interface squareProps {
  rowIdx: number;
  colIdx: number;
  turn: string;
  updateTurn: () => void;
  updateBoard: (rowIdx: number, colIdx: number) => void;
  resetCounter: number;
  winner: string;
}

const Square: React.FC<squareProps> = ({ rowIdx, 
  colIdx, 
  turn, 
  updateTurn, 
  updateBoard, 
  resetCounter, 
  winner 
}) => {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState("");
  
  useEffect(() => {
    setSelected(false);
    setValue("");
  }, [resetCounter]);

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("onClick called with rowIdx:", rowIdx, "colIdx:", colIdx);
     if (winner || selected) {
      return;
    }
    updateBoard(rowIdx, colIdx);
    setSelected(true);
    setValue(turn);
    updateTurn();
  };

  const getBackgroundColor = (value: string) => {
    if (value === "X") {
      return { background: "#ff9090" };
    } else if (value === "O") {
      return { background: "#dbfffb" };
    } else {
      return {};
    }
  };

  return (
    <>
      <div
        className="board-cell"
        onClick={onClick}
        style={getBackgroundColor(value)}
      >
        <div className="board-cell-content">{value}</div>
      </div>
    </>
  );
};

export default Square;