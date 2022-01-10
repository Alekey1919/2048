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
  score: 0,
};

const boardReducer = (state = initialState, action) => {
  const { type, payload: direction } = action;
  let board = JSON.parse(JSON.stringify(state.board));
  let newBoard = [];
  let score = state.score;
  switch (type) {
    case actionTypes.START_GAME:
      let initialBoard = JSON.parse(JSON.stringify(initialState.board));
      initialBoard = addNumber(initialBoard);
      initialBoard = addNumber(initialBoard);

      return {
        ...state,
        board: initialBoard,
        gameStatus: initialState.gameStatus,
        score: 0,
      };

    case actionTypes.HORIZONTAL_MOVE:
      board.forEach((row) => {
        let { operatedRow, newPoints } = operate(row, direction);
        newBoard.push(operatedRow);
        score += newPoints;
      });

      newBoard = checkIfMoved(state.board, newBoard);

      return {
        ...state,
        board: newBoard,
        score,
      };

    case actionTypes.VERTICAL_MOVE:
      board = rotateBoard(board);

      board.forEach((row) => {
        let { operatedRow, newPoints } = operate(row, direction);
        newBoard.push(operatedRow);
        score += newPoints;
      });

      newBoard = rotateBoard(newBoard);

      newBoard = checkIfMoved(state.board, newBoard);

      return {
        ...state,
        board: newBoard,
        score,
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
