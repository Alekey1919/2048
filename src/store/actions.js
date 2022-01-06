import { actionTypes } from "./actionTypes";

export const addNumber = () => {
  return {
    type: actionTypes.ADD_NUMBER,
    payload: 10,
  };
};

export const startGame = () => {
  return {
    type: actionTypes.START_GAME,
    payload: null,
  };
};
