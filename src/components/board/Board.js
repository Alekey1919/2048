import React from "react";
import { connect } from "react-redux";
import Tile from "../tile/Tile";
import useBoard from "./useBoard";

function Board({ board, gameStatus: { hasLost, hasWon } }) {
  const {
    handleRestart,
    handleMoveUp,
    handleMoveLeft,
    handleMoveRight,
    handleMoveDown,
  } = useBoard(board);

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
      <button onClick={handleRestart} className="restart">
        Restart
      </button>
      <div className="d-pad">
        <button id="d-pad-up" onClick={handleMoveUp}>
          <i className="fas fa-angle-up"></i>
        </button>
        <div>
          <button id="d-pad-left" onClick={handleMoveLeft}>
            <i className="fas fa-angle-left"></i>
          </button>
          <button id="d-pad-right" onClick={handleMoveRight}>
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
        <button id="d-pad-down" onClick={handleMoveDown}>
          <i className="fas fa-angle-down"></i>
        </button>
      </div>

      {hasLost || hasWon ? (
        <div className="status-message" onClick={handleRestart}>
          {hasLost ? "Game over :(" : "You won!"}
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    gameStatus: state.gameStatus,
  };
};

export default connect(mapStateToProps)(Board);
