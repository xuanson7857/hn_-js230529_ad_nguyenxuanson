import React from "react";

function TexEra({ onChaneHand, text }) {
  const handeChangeText = (text) => {
    console.log(text);
    onChaneHand(text);
  };
  return (
    <div className="text">
      <textarea
        onChange={(e) => handeChangeText(e.target.value)}
        placeholder="Enter/Paste your text heare"
        defaultValue={""}
      />
      {text}
    </div>
  );
}

export default TexEra;
