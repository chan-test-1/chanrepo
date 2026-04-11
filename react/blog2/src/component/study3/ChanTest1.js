import { useEffect, useState } from "react";

function ChanTest1() {
  const [data, setData] = useState([]); //상위메뉴
  const [fruits, setFruits] = useState("black");

  const handleMenuClick = (value) => {
    setFruits(value);
  };

  useEffect(() => {
    fetch("http://localhost:3001/fruits") //get
      .then((res) => {
        return res.json();
      })
      .then((item) => {
        setData(item);
        console.log("111", item);
      });
  }, []);

  return (
    <>
      {data.map((item, index) => {
        return (
          <div>
            <button
              onClick={() => handleMenuClick(item.color)}
              style={{ marginLeft: "15px" }}
            >
              {item.name}
            </button>
          </div>
        );
      })}
      <div
        style={{
          width: "200px",
          height: "200px",
          marginTop: "20px",
          backgroundColor: fruits,
        }}
      />
    </>
  );
}

export default ChanTest1;
