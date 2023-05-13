// src/utils/evaluateBoard.tsx

const checkLine = (line: string[], currentTurn: string): boolean => {
  return line.every((cell) => cell === currentTurn);
};

const checkRows = (board: string[][], size: number, currentTurn: string): number => {
    // Check rows
    for (let i = 0; i < size; i++) {
      if (checkLine(board[i], currentTurn)) {
        return 1;
      }
    }
    return -1;
}

const checkCols = (board: string[][], size: number, currentTurn: string): number => {
    // Check columns
    for (let i = 0; i < size; i++) {
      const col = board.map((row) => row[i]);
      if (checkLine(col, currentTurn)) {
        return 1;
      }
    }
    return -1;
}

const checkDiags = (board: string[][], size: number, currentTurn: string): number => {
    // Check diagonals
    const diag1: string[] = [];
    const diag2: string[] = [];
    for (let i = 0; i < size; i++) {
      diag1.push(board[i][i]);
      diag2.push(board[i][size - 1 - i]);
    }
    if (checkLine(diag1, currentTurn) || checkLine(diag2, currentTurn)) {
        return 1;
    }
    return -1;
}


export const checkWinnerHelper = (size: number, board: string[][], currentTurn: string): number => {
    let check = -1;
    check = checkRows(board, size, currentTurn);
    if (check !== 1) {
      check = checkCols(board, size, currentTurn);
    }
    if (check !== 1) {
      check = checkDiags(board, size, currentTurn);
    }
    if (check !== 1) {
      // Check for a tie
      if (board.flat().every((cell) => cell !== "")) {
        check = 0;
      }
    }
    return check;
};