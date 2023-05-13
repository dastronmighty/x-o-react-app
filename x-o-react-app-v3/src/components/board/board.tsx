// src/components/board/board.tsx

import React from "react";
import Row from "./row";
import _ from "lodash";

import "../../styles/board.scss";

import { useTicTacToe } from "../../utils/useTicTacToe";

interface boardProps {
  size: number;
  resetCounter: number;
}

const Board: React.FC<boardProps> = ({
  size,
  resetCounter,
}) => {
  const { turn, 
    board, 
    winner, 
    updateTurn, 
    updateBoard 
  } = useTicTacToe(size, resetCounter);

  const winnerColor = (winner: string) => {
    if (winner === "X") {
      return { color: "#ff9090"};
    } else if (winner === "O") {
      return { color: "#dbfffb" };
    } else {
      return {};
    }
  }

  return (
    <div className="board">
      {_.range(1, size + 1).map((i) => {
        const row = _.range(1, size + 1);
        return (
          <Row
            key={i}
            row={row}
            turn={turn}
            updateTurn={updateTurn}
            updateBoard={updateBoard}
            rowIdx={i - 1}
            resetCounter={resetCounter}
            winner={winner}
          />
        );
      })}
      {winner !== "" && (
        <div className="winner" style={winnerColor(winner)}>
          {winner === "Tie" ? "It's a tie!" : `Winner: ${winner}`}
        </div>
      )}
    </div>
  );
};

export default Board;