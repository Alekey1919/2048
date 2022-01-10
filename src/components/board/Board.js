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
