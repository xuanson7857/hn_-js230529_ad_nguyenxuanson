import React from "react";

function Botton({ text, onClickUper }) {
  const handecleUpper = (text) => {
    console.log(text);
    onClickUper(text);
  };

  return (
    <div className="footer">
      <button onClick={() => handecleUpper(text)}>Click to Uppercase</button>
      <button>Click to Lowercase</button>
    </div>
  );
}

export default Botton;
