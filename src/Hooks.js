import { useState, useEffect } from "react";

function Loop() {
  const [pageData, setPageData] = useState({
    loop: ["one", "two", "three", "four"],
  });

  const [text, setText] = useState("");

  const pageList = pageData.loop.map((item, key) => <li key={key}>{item}</li>);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    setPageData({
      loop: pageData.loop.concat(text),
    });
  };

  const handleRemove = () => {
    setPageData({
      loop: pageData.loop.filter((item) => item !== text),
    });
  };

  return (
    <div>
      <input type="text" name="inputVal" onChange={handleChange} value={text} />
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleRemove}>REMOVE</button>
      <ul>{pageList}</ul>
    </div>
  );
}

export default Loop;
