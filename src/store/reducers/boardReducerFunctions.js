// Reducer functions
export const addNumber = (state) => {
  // Adding a 2 or 4 if there is at least one empty space.
  let options = [];

  const board = JSON.parse(JSON.stringify(state));

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
    return state;
  }

  return board;
};

export const slide = (row) => {
  // Sliding a row to the left.
  let arr = row.filter((val) => val);
  let missing = 4 - arr.length;
  let zeros = Array(missing).fill(0);
  return arr.concat(zeros);
};

export const combine = (row) => {
  // Combining two numbers in case they are equal
  for (let i = 3; i >= 1; i--) {
    let a = row[i];
    let b = row[i - 1];
    if (a === b) {
      row[i] = a + b;
      row[i - 1] = 0;
    }
  }

  return row;
};

export const operate = (row) => {
  // Getting the result of a movement by sliding the values, then combining if it is possible, and sliding again to place all the values in their final position.
  row = slide(row);
  row = combine(row);
  row = slide(row);
  return row;
};

export const flip = (board) => {
  // Since the slide function slides the board to the left, this function takes care of flipping the board in order to perform a right move.
  for (let i = 0; i < 4; i++) {
    board[i].reverse();
  }
  return board;
};

export const checkIfMoved = (old, updated) => {
  // Checking if there was a movement to add a new number.
  if (JSON.stringify(old) !== JSON.stringify(updated)) {
    return addNumber(updated);
  } else {
    return updated;
  }
};
