import { actionTypes } from "../actionTypes";
import {
  addNumber,
  operate,
  checkIfMoved,
  checkGameStatus,
  rotateBoard,
} from "./boardReducerFunctions";

const initialState = {
  board: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  gameStatus: { hasLost: false, hasWon: false },
};

const boardReducer = (state = initialState, action) => {
  const { type } = action;
  let board = JSON.parse(JSON.stringify(state.board));
  let newBoard = [];
  switch (type) {
    case actionTypes.START_GAME:
      let initialBoard = JSON.parse(JSON.stringify(initialState.board));
      initialBoard = addNumber(initialBoard);
      initialBoard = addNumber(initialBoard);

      return {
        ...state,
        board: initialBoard,
        gameStatus: initialState.gameStatus,
      };

    case actionTypes.MOVE_LEFT:
      board.forEach((row) => {
        newBoard.push(operate(row, "left"));
      });

      newBoard = checkIfMoved(state, newBoard);

      return {
        ...state,
        board: newBoard,
      };

    case actionTypes.MOVE_RIGHT:
      board.forEach((row) => {
        newBoard.push(operate(row, "right"));
      });

      newBoard = checkIfMoved(state, newBoard);

      return {
        ...state,
        board: newBoard,
      };

    case actionTypes.MOVE_DOWN:
      board = rotateBoard(board);

      board.forEach((row) => {
        newBoard.push(operate(row, "right"));
      });

      newBoard = rotateBoard(newBoard);

      newBoard = checkIfMoved(state, newBoard);

      return {
        ...state,
        board: newBoard,
      };

    case actionTypes.MOVE_UP:
      board = rotateBoard(board);

      board.forEach((row) => {
        newBoard.push(operate(row, "left"));
      });

      newBoard = rotateBoard(newBoard);

      newBoard = checkIfMoved(state, newBoard);

      return {
        ...state,
        board: newBoard,
      };

    case actionTypes.CHECK_GAME_STATUS:
      let gameStatus = checkGameStatus(board);

      return {
        ...state,
        gameStatus,
      };
    default:
      return state;
  }
};

export default boardReducer;
