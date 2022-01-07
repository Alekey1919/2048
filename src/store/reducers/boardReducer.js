import { actionTypes } from "../actionTypes";
import {
  addNumber,
  operate,
  flip,
  checkIfMoved,
} from "./boardReducerFunctions";

const initialState = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const boardReducer = (state = initialState, action) => {
  const { type } = action;
  const board = JSON.parse(JSON.stringify(state));
  let newBoard = [];
  switch (type) {
    case actionTypes.START_GAME:
      let oneNumber = addNumber(initialState);
      let initialBoard = addNumber(oneNumber);

      return initialBoard;

    case actionTypes.MOVE_LEFT:
      board.forEach((row) => {
        newBoard.push(operate(row));
      });

      return checkIfMoved(state, newBoard);

    case actionTypes.MOVE_RIGHT:
      let reversedBoard = flip(board);

      reversedBoard.forEach((row) => {
        newBoard.push(operate(row));
      });

      newBoard = flip(newBoard);

      return checkIfMoved(state, newBoard);

    case actionTypes.MOVE_DOWN:
      return console.log("Down");

    case actionTypes.MOVE_UP:
      return console.log("Up");

    default:
      return state;
  }
};

export default boardReducer;
