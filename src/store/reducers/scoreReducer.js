import { actionTypes } from "../actionTypes";

const scoreReducer = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case "":
      return state;

    default:
      return state;
  }
};

export default scoreReducer;
