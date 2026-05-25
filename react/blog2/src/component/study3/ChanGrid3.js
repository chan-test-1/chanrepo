import { useEffect, useState } from "react";

function ChanGrid3() {
  const [data, setData] = useState([]); // 위에 테이블 데이터
  const [jungsuGubun, setJungsuGubun] = useState(["전체", "정수", "비정수"]);
  const [selected, setSelected] = useState("전체");

  //상위메뉴

  useEffect(() => {
    // 최초 데이터 가져오기.
    getData();
  }, []);

  useEffect(() => {
    // 셀렉트 박스 변경시 재조회.
    getData();
  }, [selected]);

  const getData = () => {
    // 정수,비정수 물품 조회.
    fetch("http://localhost:3001/people") //get
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log("222", data);
      });
  };

  /* ------------------------- 이벤트 -----------------------------------*/
  const handleClick = () => {
    getData();
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

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
      <select onChange={handleChange} value={selected}>
        {jungsuGubun.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>조회</button>
    </>
  );
}
export default ChanGrid3;
