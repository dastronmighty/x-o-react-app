// src/components/board/board.js

import React, { useState, useEffect } from "react";
import Row from "./row";
import _ from "lodash";

import "../../styles/board.css";

import { useTicTacToe } from "../../utils/useTicTacToe";

const Board = (props) => {
  const { turn, board, winner, updateTurn, updateBoard } = useTicTacToe(props.size, props.resetCounter);

  const winnerColor = (winner) => {
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
      {_.range(1, props.size + 1).map((i) => {
        const row = _.range(1, props.size + 1);
        return (
          <Row
            key={i}
            row={row}
            turn={turn}
            updateTurn={updateTurn}
            updateBoard={updateBoard}
            rowIdx={i - 1}
            resetCounter={props.resetCounter}
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