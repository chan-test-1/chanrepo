import { useEffect, useState } from "react";

function ChanGrid1() {
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

  /* return (
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
  ); */
  return (
    <>
      <span style={{ border: "1px solid black", backgroundColor: "yellow" }}>
        이름
      </span>
      {data.map((item, index) => {
        return <span style={{ border: "1px solid black" }}>{item.name}</span>;
      })}
      <br />
      <span style={{ border: "1px solid black", backgroundColor: "yellow" }}>
        주소
      </span>
      {data.map((item, index) => {
        return <span style={{ border: "1px solid black" }}>{item.addr}</span>;
      })}
      <br />
      <span style={{ border: "1px solid black", backgroundColor: "yellow" }}>
        직업
      </span>
      {data.map((item, index) => {
        return <span style={{ border: "1px solid black" }}>{item.job}</span>;
      })}
      <br />
      <span style={{ border: "1px solid black", backgroundColor: "yellow" }}>
        나이
      </span>
      {data.map((item, index) => {
        return <span style={{ border: "1px solid black" }}>{item.age}</span>;
      })}

      {/*  {data.map((item, index) => {
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
      })} */}
    </>
  );
}

export default ChanGrid1;
