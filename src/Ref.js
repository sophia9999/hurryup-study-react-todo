import { useState, useRef, useEffect } from "react";

function Ref() {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleChange = (e, option) => {
    const textIDKey = document.getElementById("textID");
    if (option === 1) {
      textIDKey.value = e.target.value;
      //textRef.current.value = e.target.value;
      setText(e.target.value);
    } else if (option === 2) {
      console.log(textIDKey.value);
      setText(textIDKey.value);
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => handleChange(e, 1)} />
      <br />
      <textarea
        rows={5}
        cols={30}
        id="textID"
        ref={textRef}
        onChange={(e) => handleChange(e, 2)}
      ></textarea>

      <button>Ref Info</button>
    </div>
  );
}

export default Ref;
