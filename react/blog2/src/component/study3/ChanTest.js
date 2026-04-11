import { useEffect, useState } from "react";

function ChanTest() {
  const [data, setData] = useState([]); //상위메뉴

  const [a, setA] = useState("지훈, 찬이");
  const [b, setB] = useState(123);
  const [c, setC] = useState({ name: "찬", age: 30 });
  const [radio, setRadio] = useState();

  const jungSu = ["정수", "비정수"];

  const [selected, setSelected] = useState(); // 사용자가 선택한 동물

  useEffect(() => {
    setB(456);
  }, []);

  return (
    <>
      {jungSu} / {a} /{b}/ {c.name}/ {c.age}
      {jungSu.map((item, index) => {
        if (index === 1) return;

        return item;
      })}
      <div>
        <input
          type="radio"
          value="정수"
          checked={radio === "정수"}
          onChange={(e) => setRadio(e.target.value)}
        />
        정수
        <input
          type="radio"
          value="비정수"
          checked={radio === "비정수"}
          onChange={(e) => setRadio(e.target.value)}
        />
        비정수
      </div>
    </>
  );
}

export default ChanTest;
