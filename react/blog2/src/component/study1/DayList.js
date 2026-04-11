import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import dummy from "../db/data.json"

export default function DayList() {
  const [days, setDays] = useState([]);
  // console.log(dummy);

  /* useEffect(() => {
        console.log("하하하하하")
    }) */

  useEffect(() => {
    fetch("http://localhost:3001/days") //get
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("가가가가가가가가가", data);
        setDays(data);
      });
  }, []);

  console.log(
    "반복해볼까?",
    days.map((data) => {
      <li>{data.day}</li>;
    })
  );

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}> Day {day.day}(영어) </Link>
          </li>
        ))}
      </ul>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/korPage/${day.day}`}> Day {day.day}(한글) </Link>
          </li>
        ))}
      </ul>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/korPage1/${day.day}`}> Day {day.day}(한글1) </Link>
          </li>
        ))}
      </ul>
      <ul className="list_day">
        <li>
          <Link to={"/ChanPage"}> Day(아무거나) </Link>
        </li>
      </ul>
    </>
  );
}
