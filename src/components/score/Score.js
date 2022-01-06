import React from "react";
import { connect } from "react-redux";

function Score({ score }) {
  return (
    <div className="score">
      <h1>
        Score: <span>{score}</span>
      </h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

export default connect(mapStateToProps)(Score);
