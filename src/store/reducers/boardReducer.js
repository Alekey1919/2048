import { actionTypes } from "../actionTypes";

// Reducer functions
const addNumber = (state) => {
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

const initialState = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const boardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.START_GAME:
      let oneNumber = addNumber(initialState);
      let initialBoard = addNumber(oneNumber);

      return initialBoard;

    case actionTypes.ADD_NUMBER:
      return addNumber(state);
    default:
      return state;
  }
};

export default boardReducer;
