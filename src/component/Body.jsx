import React from "react";

function Body({ text }) {
  return (
    <div className="title_flex">
      <div className="content">
        <h3>{text.split("").length}</h3>
      </div>
      <div className="content">
        <h3>{text.length}</h3>
      </div>
      <div className="content">
        <h3>{text.split("\n").length - 1}</h3>
      </div>
    </div>
  );
}

export default Body;
