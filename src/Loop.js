import { useState, useEffect } from "react";

function Loop() {
  const [pageData, setPageData] = useState({
    loop: ["one", "two", "three", "four"],
  });

  const [text, setText] = useState("");

  //
  let a = ["one", "two", "three", "four"];
  let b = {
    days: [
      { id: 1, day: 1 },
      { id: 2, day: 2 },
      { id: 3, day: 3 },
    ],
    words: [
      {
        id: 1,
        day: 1,
        eng: "book",
        kor: "책",
        isDone: false,
      },
      {
        id: 3,
        day: 2,
        eng: "car",
        kor: "자동차",
        isDone: false,
      },
      {
        id: 12,
        day: "3",
        eng: "apple",
        kor: "사과",
        isDone: false,
      },
    ],
  };
  //   const result = a.filter((item, index, array) => {
  //     if (index === 1) return item;
  //   });
  //   console.log("result:", result);

  b.days.map((item, index) => {
    console.log(item, index);
  });
  //

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
      <hr /> Map EX)
      <div>
        {b.words.map((item, index) => (
          <div key={index}>
            <span>{item.kor}</span> -- {index}
          </div>
        ))}
      </div>
      <hr />
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleRemove}>REMOVE</button>
      <ul>{pageList}</ul>
    </div>
  );
}

export default Loop;
