// Reducer functions
export const addNumber = (board) => {
  // Adding a 2 or 4 if there is at least one empty space.
  let options = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 0) {
        options.push({ x: i, y: j });
      }
    }
  }

  if (options.length > 0) {
    let spot = options[Math.floor(Math.random() * options.length)];
    board[spot.x][spot.y] = Math.random() > 0.5 ? 2 : 4;
  } else {
    return board;
  }

  return board;
};

export const slide = (row, dir) => {
  // Sliding a row to the left or to the right depending on the direction passed.
  let arr = row.filter((val) => val);
  let missing = 4 - arr.length;
  let zeros = Array(missing).fill(0);

  return dir === "left" ? arr.concat(zeros) : zeros.concat(arr);
};

export const combine = (row, dir) => {
  // Combining two numbers in case they are equal.
  for (
    let i = dir === "left" ? 3 : 0;
    dir === "left" ? i >= 1 : i <= 3;
    dir === "left" ? i-- : i++
  ) {
    let a = row[i];
    let b = row[i - 1];
    if (a === b) {
      row[i] = a + b;
      row[i - 1] = 0;
    }
  }

  return row;
};

export const operate = (row, dir) => {
  // Getting the result of a movement by sliding the values, then combining if it is possible, and sliding again to place all the values in their final position.
  // The direction is used to determine in which direction the slide and combine functions must operate the row.
  row = slide(row, dir);
  row = combine(row, dir);
  row = slide(row, dir);

  return row;
};

export const rotateBoard = (board) => {
  // Since the values in vertical moves are in separated arrays, the board is rotated so that the slide and combine functions can operate on them.
  let rotatedBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      rotatedBoard[i][j] = board[j][i];
    }
  }
  return rotatedBoard;
};

export const checkGameStatus = (board) => {
  let gameStatus = {
    hasLost: true,
    hasWon: false,
  };

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      // Checking if there are zeros
      if (board[i][j] === 2048) {
        gameStatus.hasLost = false;
        gameStatus.hasWon = true;
      } else if (board[i][j] === 0) {
        gameStatus.hasLost = false;
      } else if (
        // Checking if there are equal tiles next to eachother
        i !== 3 &&
        board[i][j] === board[i + 1][j]
      ) {
        gameStatus.hasLost = false;
      } else if (j !== 3 && board[i][j] === board[i][j + 1]) {
        gameStatus.hasLost = false;
      }
    }
  }
  return gameStatus;
};

export const checkIfMoved = (old, updated) => {
  // Checking if there was a movement to add a new number.
  return JSON.stringify(old) !== JSON.stringify(updated)
    ? addNumber(updated)
    : updated;
};
