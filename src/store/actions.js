import { actionTypes } from "./actionTypes";

export const startGame = () => {
  return {
    type: actionTypes.START_GAME,
  };
};

export const checkGameStatus = () => {
  return {
    type: actionTypes.CHECK_GAME_STATUS,
  };
};

export const horizontalMove = (dir) => {
  return {
    type: actionTypes.HORIZONTAL_MOVE,
    payload: dir,
  };
};

export const verticalMove = (dir) => {
  return {
    type: actionTypes.VERTICAL_MOVE,
    payload: dir,
  };
};
