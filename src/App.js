import logo from "./logo.svg";
import "./App.css";
import Body from "./component/Body";
import TexEra from "./component/TexEra";
import Botton from "./component/Botton";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const handeChangeText = (newText) => {
    setText(newText);
  };
  const handecleUpper = (text) => {
    const newText = text.toUpperCase();
    console.log(newText);
    setText(newText);
  };
  return (
    <div className="container">
      <div className="title">
        <h1>
          <i className="fa-solid fa-house">Word Counter</i>
        </h1>
      </div>
      <Body text={text} />
      <TexEra
        text={text}
        onChaneHand={handeChangeText}
        onClickUper={handecleUpper}
      />
      <Botton text={text} />
    </div>
  );
}

export default App;
