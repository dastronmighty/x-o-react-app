
const checkLine = (line, currentTurn) => {
  return line.every((cell) => cell === currentTurn);
};

const checkRows = (board, size, currentTurn) => {
    // Check rows
    for (let i = 0; i < size; i++) {
      if (checkLine(board[i], currentTurn)) {
        return 1;
      }
    }
    return -1;
}

const checkCols = (board, size, currentTurn) => {
    // Check columns
    for (let i = 0; i < size; i++) {
      const col = board.map((row) => row[i]);
      if (checkLine(col, currentTurn)) {
        return 1;
      }
    }
    return -1;
}

const checkDiags = (board, size, currentTurn) => {
    // Check diagonals
    const diag1 = [];
    const diag2 = [];
    for (let i = 0; i < size; i++) {
      diag1.push(board[i][i]);
      diag2.push(board[i][size - 1 - i]);
    }
    if (checkLine(diag1, currentTurn) || checkLine(diag2, currentTurn)) {
        return 1;
    }
    return -1;
}


export const checkWinnerHelper = (size, board, currentTurn) => {
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