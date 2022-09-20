import { useState } from "react";

import Children from "./Children";
import Sample from "./Sample";

function Event() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    console.log(`text:${text}`, e.target.value);
    setText(e.target.value);
  };

  const handleChange2 = (e) => {
    alert("change!!");
  };

  const handleButtonClickReset = (e) => {
    setText("");
  };

  const handleButtonClick = (e) => {
    console.log("click!!");
  };

  const handleKeyUp = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => handleChange(e)}
          onKeyUp={(e) => handleKeyUp(e)}
        />
      </div>
      <div>
        <button onClick={(e) => handleButtonClick(e)}>button</button>
        <button onClick={(e) => handleButtonClickReset(e)}>reset</button>
      </div>
      <Children onchange={handleChange2}>
        <Sample />
      </Children>
    </>
  );
}

export default Event;
