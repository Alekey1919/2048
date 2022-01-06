import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../../store/actions";

const useBoard = () => {
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(startGame());
  };

  useEffect(() => {
    dispatch(startGame());
  }, []);

  return { handleRestart };
};

export default useBoard;
