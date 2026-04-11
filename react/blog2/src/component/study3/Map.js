import { useEffect, useState } from "react";

function Map() {
  const [data, setData] = useState([]); //상위메뉴
  const [jungSu, setJungsu] = useState(["정수", "비정수"]);
  const [selected, setSelected] = useState(); // 사용자가 선택한 동물

  useEffect(() => {
    fetch("http://localhost:3001/animal") //get
      .then((res) => {
        return res.json();
      })
      .then((item) => {
        setData(item);
        console.log("가가가가가가가가가", item);
      });
  }, []);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const selectedAnimal = data.find((item) => item.name === selected);
  console.log(data);

  return (
    <>
      <select onChange={handleChange} value={selected}>
        <option value="">선택하세요</option>
        {jungSu.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {data.map((item, index) => {
        if (selected === item.jungsu) {
          return (
            <div>
              이름 : {item.name}, 사운드: {item.sound}
            </div>
          );
        }
      })}
    </>
  );
}

export default Map;
