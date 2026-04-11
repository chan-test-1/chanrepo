import { useEffect, useState } from "react";

function ChanGrid3() {
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
      ===================================== TEST2
      ========================================
      <div>
        <spen style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          이름
        </spen>
        <spen style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          주소
        </spen>
        <spen style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          직업
        </spen>
        <spen style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          나이
        </spen>
      </div>
      <div>
        {data.map((item) => (
          <div>
            <spen style={{ border: "1px solid black" }}>{item.name}</spen>
            <spen style={{ border: "1px solid black" }}>{item.addr}</spen>
            <spen style={{ border: "1px solid black" }}>{item.job}</spen>
            <spen style={{ border: "1px solid black" }}>{item.age}</spen>
          </div>
        ))}
      </div>
      ===================================== TEST1
      ========================================
      <div>
        <spen style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          이름
        </spen>
        {data.map((item) => (
          <spen style={{ border: "1px solid black" }}>{item.name}</spen>
        ))}
      </div>
      <div>
        <spen style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          주소
        </spen>
        {data.map((item) => (
          <spen style={{ border: "1px solid black" }}>{item.addr}</spen>
        ))}
      </div>
      <div>
        <spen style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          직업
        </spen>
        {data.map((item) => (
          <spen style={{ border: "1px solid black" }}>{item.job}</spen>
        ))}
      </div>
      <div>
        <spen style={{ border: "1px solid black", backgroundColor: "yellow" }}>
          나이
        </spen>
        {data.map((item) => (
          <spen style={{ border: "1px solid black" }}>{item.age}</spen>
        ))}
      </div>
    </>
  );
}
export default ChanGrid3;
