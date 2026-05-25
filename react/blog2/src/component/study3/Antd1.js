import { useState, useEffect } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"; // alpine 대신 quartz 권장

// 모듈 및 스타일 임포트
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { Button, Col, Input, Modal, Row, Table } from "antd";
import api from "../../api/api";

// ★ 필수: 모듈 등록 (이게 없으면 그리드가 안 나옵니다)
ModuleRegistry.registerModules([AllCommunityModule]);

function Antd1() {
  const [rowData, setRowData] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(""); // 이름
  const [addr, setAddr] = useState(""); // 주소
  const [job, setJob] = useState(""); // 직업
  const [age, setAge] = useState(0); // 나이
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); //체크박스 선택 한 로우 키

  const columns = [
    { title: "이름", dataIndex: "name" },
    { title: "주소", dataIndex: "addr" },
    { title: "직업", dataIndex: "job" },
    { title: "나이", dataIndex: "age" },
  ];

  /* useeffect 공간 */
  useEffect(() => {
    fetchData();
  }, []);

  /* api 함수 */
  const fetchData = async () => {
    // 데이터 조회 함수
    const res = await api.get("/people");
    console.log("datadata", res.data);
    setRowData(res.data);
  };

  const addUser = async () => {
    // 등록 함수.
    const newUser = {
      //등록 할 새로운 유저의 정보를 객체에 담는다.
      name: name,
      addr: addr,
      job: job,
      age: age,
    };

    console.log("newUser", newUser);

    await api.post("/people", newUser).then((res) => {
      if (res.status === 201 || res.status === 200) {
        alert("저장되었습니다.");
        onFinish();
        fetchData();
        addUserReset();
      }
    });
  };

  // ✅ 삭제 (하나씩)
  const deleteUsers = async () => {
    if (selectedRowKeys.length === 0) {
      alert("선택된 데이터 없음");
      return;
    }
    const isOk = window.confirm("삭제하시겠습니까?");

    if (!isOk) {
      console.log("취소됨");
      return; // ❌ 여기서 종료
    }

    try {
      // ⭐ 핵심 (순차 삭제)
      for (const id of selectedRowKeys) {
        await api.delete(`/people/${id}`);
      }

      alert("삭제 완료");

      setSelectedRowKeys([]);
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  /* 이벤트함수 */
  const addUserReset = () => {
    setName("");
    setAddr("");
    setJob("");
    setAge(0);
  };

  // ✅ 체크박스
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => {
      setSelectedRowKeys(keys);
    },
  };

  const onFinish = (values) => {
    // 모달 창 종료 함수.
    console.log(values);
    setOpen(false);
  };

  const handleName = (e) => {
    // 이름 핸들러
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleAddr = (e) => {
    // 주소 핸들러
    console.log(e.target.value);
    setAddr(e.target.value);
  };
  const handleJob = (e) => {
    // 직업 핸들러
    console.log(e.target.value);
    setJob(e.target.value);
  };
  const handleAge = (e) => {
    // 나이 핸들러
    console.log(e.target.value);
    setAge(e.target.value);
  };

  console.log("selectedRowKeys", selectedRowKeys);
  return (
    <>
      =========================Antd1=====================
      <Table
        rowKey="id"
        columns={columns}
        dataSource={rowData}
        rowSelection={rowSelection}
      />
      <Button onClick={() => setOpen(true)}>열기</Button>
      <Button danger style={{ marginLeft: 10 }} onClick={deleteUsers}>
        삭제
      </Button>
      <Modal
        open={open}
        onOk={addUser}
        onCancel={onFinish}
        okText="저장"
        cancelText="취소"
      >
        <h2>회원 등록</h2>
        이름:<Input value={name} onChange={handleName}></Input>
        주소:<Input value={addr} onChange={handleAddr}></Input>
        직업:<Input value={job} onChange={handleJob}></Input>
        나이:<Input value={age} onChange={handleAge}></Input>
      </Modal>
    </>
  );
}

export default Antd1;
