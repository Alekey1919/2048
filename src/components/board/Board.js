import React from "react";
import { connect } from "react-redux";
import Tile from "../tile/Tile";
import useBoard from "./useBoard";

function Board({ board, gameStatus: { hasLost, hasWon } }) {
  const { handleRestart } = useBoard(board);

  return (
    <div className="board">
      {board.map((row, key) => {
        return (
          <div key={key} className="board-row">
            {row.map((tile, key) => {
              return <Tile key={key} value={tile} />;
            })}
          </div>
        );
      })}
      <button onClick={handleRestart}>Restart</button>

      {hasLost && (
        <div className="status-message" onClick={handleRestart}>
          Game over :(
        </div>
      )}
      {hasWon && (
        <div className="status-message" onClick={handleRestart}>
          You won!
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    board: state.board.board,
    gameStatus: state.board.gameStatus,
  };
};

export default connect(mapStateToProps)(Board);
