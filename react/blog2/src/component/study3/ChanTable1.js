import { useEffect, useState } from "react";

function ChanTable1() {
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
      -------------------찐 테이블-------------------
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          style={{ border: "1px solid black", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th
                rowSpan={2}
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                이름
              </th>
              <th
                colSpan={2}
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                세부정보
              </th>
              <th
                rowSpan={2}
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                나이
              </th>
            </tr>
            <tr>
              <th
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                직업
              </th>
              <th
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                주소
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr>
                <td style={{ border: "1px solid black" }}>{item.name}</td>
                <td style={{ border: "1px solid black" }}>{item.job}</td>
                <td style={{ border: "1px solid black" }}>{item.addr}</td>
                <td style={{ border: "1px solid black" }}>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ChanTable1;
