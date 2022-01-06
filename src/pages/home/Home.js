import React from "react";
import Board from "../../components/board/Board";
import Score from "../../components/score/Score";

function Home() {
  return (
    <div className="home">
      <Score />
      <Board />
    </div>
  );
}

export default Home;
