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

  const handleMoveUp = () => {
    dispatch(verticalMove("left"));
  };

  const handleMoveDown = () => {
    dispatch(verticalMove("right"));
  };

  const handleMoveLeft = () => {
    dispatch(horizontalMove("left"));
  };

  const handleMoveRight = () => {
    dispatch(horizontalMove("right"));
  };

  const UP_ARROW = 38;
  const DOWN_ARROW = 40;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;
  const SUPR = 46;

  const handleKeyDown = (e) => {
    let key = e.keyCode;
    if (key === UP_ARROW) {
      handleMoveUp();
    } else if (key === LEFT_ARROW) {
      handleMoveLeft();
    } else if (key === DOWN_ARROW) {
      handleMoveDown();
    } else if (key === RIGHT_ARROW) {
      handleMoveRight();
    } else if (key === SUPR) {
      handleRestart();
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

  return {
    handleRestart,
    handleMoveUp,
    handleMoveLeft,
    handleMoveRight,
    handleMoveDown,
  };
};

export default useBoard;
