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

  const UP_ARROW = 38;
  const DOWN_ARROW = 40;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;
  const SUPR = 46;

  const handleKeyDown = (e) => {
    let key = e.keyCode;
    if (key === UP_ARROW) {
      dispatch(verticalMove("left"));
    } else if (key === LEFT_ARROW) {
      dispatch(horizontalMove("left"));
    } else if (key === DOWN_ARROW) {
      dispatch(verticalMove("right"));
    } else if (key === RIGHT_ARROW) {
      dispatch(horizontalMove("right"));
    } else if (key === SUPR) {
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
