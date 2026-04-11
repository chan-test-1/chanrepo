import { useState } from "react";

export default function Word({ word, getWords }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const toggleDone = () => {
    // setIsDone(!isDone)
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  const del = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          getWords();
        }
      });
    }
  };

  return (
    <>
      <tr className={isDone ? "off" : ""}>
        <td>
          <input type="checkbox" checked={isDone} onChange={toggleDone} />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button className="btn_show" onClick={toggleShow}>
            {isShow ? "뜻 숨기기" : "뜻 보기"}
          </button>
          <button className="btn_del" onClick={del}>
            삭제
          </button>
        </td>
      </tr>
    </>
  );
}
