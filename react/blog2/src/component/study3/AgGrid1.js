import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"; // alpine 대신 quartz 권장

// 모듈 및 스타일 임포트
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

// ★ 필수: 모듈 등록 (이게 없으면 그리드가 안 나옵니다)
ModuleRegistry.registerModules([AllCommunityModule]);

function AgGrid1() {
  const [rowData, setRowData] = useState([]);

  const columnDefs = [
    {
      field: "name",
      headerName: "이름",
      sortable: true,
      headerClass: "ag-center-header",
      cellStyle: { textAlign: "center" },
    },
    {
      field: "addr",
      headerName: "주소",
      sortable: true,
    },
    {
      field: "job",
      headerName: "직업",

      sortable: true,
    },
    {
      field: "age",
      headerName: "나이",
      valueFormatter: (item) => {
        console.log("가가가가가", item);
        return item.value?.toLocaleString() + "살";
      },
    },
  ];

  useEffect(() => {
    fetch("http://localhost:3001/people") //get
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRowData(data);
        console.log("221232", data);
      });
  }, []);

  return (
    <>
      =========================AgGrid=====================
      <div
        className="ag-theme-quartz"
        style={{
          margin: "0 auto",
          height: 400,
          width: 810,
          alignContent: "center",
        }}
      >
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </>
  );
}

export default AgGrid1;
