// src/utils/useTicTacToe.tsx

import { useState, useEffect } from 'react';

import { checkWinnerHelper } from './evaluateBoard';

export const useTicTacToe = (size: number, resetCounter: number) => {
  const [turn, setTurn] = useState<string>("X");
  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: size }, () => Array.from({ length: size }, () => ""))
  );
  const [winner, setWinner] = useState<string>("");

  useEffect(() => {
    setBoard(Array.from({ length: size }, () => Array.from({ length: size }, () => "")));
    setWinner("");
    setTurn("X");
  }, [size, resetCounter]);

  const updateTurn = () => {
    setTurn((prevState) => (prevState === "X" ? "O" : "X"));
  };

  const updateBoard = (row: number, col: number) => {
    if (winner || board[row][col] !== "") {
      // If there's a winner or the cell is already filled, do not update the board
      return;
    }
    const newBoard = [...board];
    newBoard[row][col] = turn;
    setBoard(newBoard);
    checkWinner(turn);
  };

  const checkWinner = (currentTurn: string) => {
    const checkWinnerToken = checkWinnerHelper(size, board, currentTurn)
    console.log(checkWinnerToken);
    if (checkWinnerToken === 1) {
      setWinner(currentTurn);
      setTurn("");
    }
    else if (checkWinnerToken === 0) {
      setWinner("Tie");
      setTurn("");
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