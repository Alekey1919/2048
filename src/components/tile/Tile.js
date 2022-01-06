import React from "react";

function Tile({ value }) {
  let style = {
    background: "#faf8ef",
    color: "black",
  };

  if (value === 2) {
    style.background = "#001219";
    style.color = "white";
  } else if (value === 4) {
    style.background = "#005f73";
    style.color = "white";
  } else if (value === 8) {
    style.background = "#0a9396";
    style.color = "white";
  } else if (value === 16) {
    style.background = "#94d2bd";
  } else if (value === 32) {
    style.background = "#e9d8a6";
  } else if (value === 64) {
    style.background = "#ee9b00";
    style.color = "white";
  } else if (value === 128) {
    style.background = "#ca6702";
    style.color = "white";
  } else if (value === 256) {
    style.background = "#bb3e03";
    style.color = "white";
  } else if (value === 512) {
    style.background = "#ae2012";
    style.color = "white";
  } else if (value === 1024) {
    style.background = "#9b2226";
    style.color = "white";
  } else if (value === 2048) {
    style.background = "#3d405b";
    style.color = "white";
  }

  return (
    <div className="tile" style={style}>
      {value}
    </div>
  );
}

export default Tile;
