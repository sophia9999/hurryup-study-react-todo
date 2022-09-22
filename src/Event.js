import { useState } from "react";

import Children from "./Children";
import Sample from "./Sample";

function Event() {
  const [text, setText] = useState("");
  const [selectbox, setSelectbox] = useState(0);
  const [selectbox2, setSelectbox2] = useState(0);

  const handleChange = (e, item1, item2) => {
    console.log(`text!!`);
    setText(e.target.value);
    setSelectbox(item1);
    setSelectbox2(item2);
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

  let itemValue = "1";

  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => handleChange(e, 1, 1)}
          onKeyUp={handleKeyUp}
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
