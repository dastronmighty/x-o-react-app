// src/utils/useTicTacToe.js

import { useState, useEffect } from 'react';

import { checkWinnerHelper } from './evaluateBoard';

export const useTicTacToe = (size, resetCounter) => {
  const [turn, setTurn] = useState("X");
  const [board, setBoard] = useState(Array.from({ length: size }, () => Array.from({ length: size }, () => "")));
  const [winner, setWinner] = useState("");

  useEffect(() => {
    setBoard(Array.from({ length: size }, () => Array.from({ length: size }, () => "")));
    setWinner("");
    setTurn("X");
  }, [size, resetCounter]);

  const updateTurn = () => {
    setTurn((prevState) => (prevState === "X" ? "O" : "X"));
  };

  const updateBoard = (row, col) => {
    if (winner || board[row][col] !== "") {
      // If there's a winner or the cell is already filled, do not update the board
      return;
    }
    const newBoard = [...board];
    newBoard[row][col] = turn;
    setBoard(newBoard);
    checkWinner(turn);
  };

  const checkWinner = (currentTurn) => {
    const checkWinnerToken = checkWinnerHelper(size, board, currentTurn)
    console.log(checkWinnerToken);
    if (checkWinnerToken === 1) {
      setWinner(currentTurn);
      setTurn(null);
    }
    else if (checkWinnerToken === 0) {
      setWinner("Tie");
      setTurn(null);
    }
  };

  return {
    turn,
    board,
    winner,
    updateTurn,
    updateBoard,
  };
};