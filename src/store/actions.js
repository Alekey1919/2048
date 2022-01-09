import { actionTypes } from "./actionTypes";

export const startGame = () => {
  return {
    type: actionTypes.START_GAME,
  };
};

export const moveDown = () => {
  return {
    type: actionTypes.MOVE_DOWN,
  };
};

export const moveUp = () => {
  return {
    type: actionTypes.MOVE_UP,
  };
};

export const moveRight = () => {
  return {
    type: actionTypes.MOVE_RIGHT,
  };
};

export const moveLeft = () => {
  return {
    type: actionTypes.MOVE_LEFT,
  };
};

export const checkGameStatus = () => {
  return {
    type: actionTypes.CHECK_GAME_STATUS,
  };
};
