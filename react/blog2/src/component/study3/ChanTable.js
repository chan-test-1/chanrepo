import { useEffect, useState } from "react";

function ChanTable() {
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
      -------------------테이블-------------------
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
                컬럼1
              </th>
              <th
                colSpan={2}
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                컬럼2
              </th>
              <th
                colSpan={2}
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                컬럼3
              </th>
            </tr>

            <tr>
              <th
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                컬럼2-1
              </th>
              <th
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                컬럼2-2
              </th>
              <th
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                컬럼3-1
              </th>
              <th
                style={{ border: "1px solid black", backgroundColor: "yellow" }}
              >
                컬럼3-2
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ border: "1px solid black" }}>내용1</td>
              <td style={{ border: "1px solid black" }}>내용1</td>
              <td style={{ border: "1px solid black" }}>내용1</td>
              <td style={{ border: "1px solid black" }}>내용1</td>
              <td style={{ border: "1px solid black" }}>내용1</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
              <td style={{ border: "1px solid black" }}>내용2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ChanTable;
