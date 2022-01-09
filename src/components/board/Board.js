import React from "react";
import { connect } from "react-redux";
import Tile from "../tile/Tile";
import useBoard from "./useBoard";

function Board({ board }) {
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
  };
};

export default connect(mapStateToProps)(Board);
