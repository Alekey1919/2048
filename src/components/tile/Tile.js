import React from "react";

function Tile({ value }) {
  return <div className={`tile color${value}`}>{value}</div>;
}

export default Tile;
