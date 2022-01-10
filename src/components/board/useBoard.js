import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  startGame,
  checkGameStatus,
  horizontalMove,
  verticalMove,
} from "../../store/actions";

const useBoard = (board) => {
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(startGame());
  };

  const handleKeyDown = (e) => {
    let key = e.keyCode;
    if (key === 38) {
      dispatch(verticalMove("left"));
    } else if (key === 37) {
      dispatch(horizontalMove("left"));
    } else if (key === 40) {
      dispatch(verticalMove("right"));
    } else if (key === 39) {
      dispatch(horizontalMove("right"));
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
