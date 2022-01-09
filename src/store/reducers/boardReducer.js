import { actionTypes } from "../actionTypes";
import {
  addNumber,
  operate,
  checkIfMoved,
  checkGameOver,
  rotateBoard,
} from "./boardReducerFunctions";

const initialState = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const boardReducer = (state = initialState, action) => {
  const { type } = action;
  let board = JSON.parse(JSON.stringify(state));
  let newBoard = [];
  switch (type) {
    case actionTypes.START_GAME:
      let initialBoard = JSON.parse(JSON.stringify(initialState));
      initialBoard = addNumber(initialBoard);
      initialBoard = addNumber(initialBoard);

      return initialBoard;

    case actionTypes.MOVE_LEFT:
      board.forEach((row) => {
        newBoard.push(operate(row, "left"));
      });

      return checkIfMoved(state, newBoard);

    case actionTypes.MOVE_RIGHT:
      board.forEach((row) => {
        newBoard.push(operate(row, "right"));
      });

      return checkIfMoved(state, newBoard);

    case actionTypes.MOVE_DOWN:
      board = rotateBoard(board);

      board.forEach((row) => {
        newBoard.push(operate(row, "right"));
      });

      newBoard = rotateBoard(newBoard);

      return checkIfMoved(state, newBoard);

    case actionTypes.MOVE_UP:
      board = rotateBoard(board);

      board.forEach((row) => {
        newBoard.push(operate(row, "left"));
      });

      newBoard = rotateBoard(newBoard);

      return checkIfMoved(state, newBoard);

    case actionTypes.CHECK_GAME_OVER:
      checkGameOver(board) && alert("Game Over");
      return state;
    default:
      return state;
  }
};

export default boardReducer;
