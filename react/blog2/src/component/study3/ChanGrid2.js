import { useEffect, useState } from "react";

function ChanGrid2() {
  const [data, setData] = useState([]);
  //상위메뉴

  useEffect(() => {
    fetch("http://localhost:3001/people") //get
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log("222", data);
      });
  }, []);

  return (
    <>
      <div>
        =======================================CHANGRID2=============================
      </div>
      <div>
        <span style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          이름
        </span>
        <span style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          주소
        </span>
        <span style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          직업
        </span>
        <span style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          나이
        </span>
      </div>
      {data.map((item) => (
        <div>
          <span style={{ border: "1px solid black" }}>{item.name}</span>
          <span style={{ border: "1px solid black" }}>{item.addr}</span>
          <span style={{ border: "1px solid black" }}>{item.job}</span>
          <span style={{ border: "1px solid black" }}>{item.age}</span>
        </div>
      ))}
      {/* 
      {data.map((item, index) => (
        <div>
          <span
            style={{ border: "1px solid black", backgroundColor: "yellow" }}
          >
            이름
          </span>
          <span style={{ border: "1px solid black" }}>{item.name}</span>
        </div>
      ))} */}
    </>
  );
}
export default ChanGrid2;
