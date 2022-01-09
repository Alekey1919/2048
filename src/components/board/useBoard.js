import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  startGame,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  checkGameStatus,
} from "../../store/actions";

const useBoard = (board) => {
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(startGame());
  };

  const handleKeyDown = (e) => {
    let key = e.keyCode;
    if (key === 38) {
      dispatch(moveUp());
    } else if (key === 37) {
      dispatch(moveLeft());
    } else if (key === 40) {
      dispatch(moveDown());
    } else if (key === 39) {
      dispatch(moveRight());
    } else if (key === 46) {
      // Supr key to restart
      dispatch(startGame());
    }
  };

  useEffect(() => {
    dispatch(startGame());
    window.addEventListener("keydown", (e) => {
      handleKeyDown(e);
    });
  }, []);

  useEffect(() => {
    dispatch(checkGameStatus());
  }, [board]);

  return { handleRestart };
};

export default useBoard;
