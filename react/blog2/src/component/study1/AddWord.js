import { useNavigate, useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./Word";
import { useEffect, useRef, useState } from "react";

export default function AddWord() {
  const navigate = useNavigate();
  const [days, setDays] = useState([]);

  const [eng, setEng] = useState();
  const [kor, setKor] = useState();
  const [day, setDay] = useState();

  const engRef = useRef(null);

  console.log("eng", eng);
  console.log("engRef", engRef);

  console.log("kor", kor);
  console.log("day", day);

  useEffect(() => {
    fetch("http://localhost:3001/days")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data);
      });
  }, []);

  const handleSave = () => {
    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day,
        eng,
        kor,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        if (res.ok) {
          alert("생성이 완료 되었습니다.");
          navigate(`/`);
        }
      }
    });
  };

  return (
    <div>
      <div>
        <label>Eng : </label>
        <input
          type="text"
          placeholder="computer"
          ref={engRef}
          onChange={(e) => setEng(e.target.value)}
        />
      </div>
      <div>
        <label>Kor : </label>
        <input
          type="text"
          placeholder="컴퓨터"
          onChange={(e) => setKor(e.target.value)}
        />
      </div>
      <div>
        <label>Day : </label>
        <select onChange={(e) => setDay(e.target.value)}>
          {days.map((item) => (
            <option key={item.id} value={item.day}>
              {item.day}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleSave}>저장</button>
    </div>
  );
}
