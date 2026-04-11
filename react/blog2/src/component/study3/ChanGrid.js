import { useEffect, useState } from "react";

function ChanGrid() {
  const [data, setData] = useState([]); //상위메뉴

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

  let data1 = [];

  /*   [
    { name: "이지훈", addr: "신대방", job: "개발자", age: "38" },
    { name: "이찬이", addr: "상계동", job: "강사", age: "40" },
    { name: "찬돌", addr: "중계동", job: "개발자", age: "30" },
    { name: "소리", addr: "방배동", job: "백수", age: "37" },
    { name: "소원", addr: "노원", job: "유투버", age: "40" },
    { name: "이찬순", addr: "창동", job: "백수", age: "25" },
  ];

  data1 = aaaaa; */

  /*   return (
    <>
      <span style={{ border: "1px solid black" }}>이름</span>
      <span style={{ border: "1px solid black" }}>주소</span>
      <span style={{ border: "1px solid black" }}>직업</span>
      <span style={{ border: "1px solid black" }}>나이</span>
    </>
  ); */

  return (
    <>
      {data.map((item, index) => {
        return (
          <>
            <div>
              <span
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                이름
              </span>
              <span style={{ border: "1px solid black" }}>{item.name}</span>
            </div>
            <div>
              <span
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                주소
              </span>
              <span style={{ border: "1px solid black" }}>{item.addr}</span>
            </div>
            <div>
              <span
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                직업
              </span>
              <span style={{ border: "1px solid black" }}>{item.job}</span>
            </div>
            <div>
              <span
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                나이
              </span>
              <span style={{ border: "1px solid black" }}>{item.age}</span>
            </div>
          </>
        );
      })}
    </>
  );
}

export default ChanGrid;
