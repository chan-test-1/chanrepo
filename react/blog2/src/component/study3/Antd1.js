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

  const columns = [
    { title: "이름", dataIndex: "name" },
    { title: "주소", dataIndex: "addr" },
    { title: "직업", dataIndex: "job" },
    { title: "나이", dataIndex: "age" },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 데이터 조회 함수
    const res = await api.get("/people");
    console.log("datadata", res.data);
    setRowData(res.data);
  };

  const addUser = async () => {
    // 등록 함수.
    const newUser = {
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
      }
    });
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
  return (
    <>
      =========================Antd1=====================
      <Button type="primary">버튼</Button>
      <Row>
        <Col span={12}>왼쪽</Col>
        <Col span={12}>오른쪽</Col>
      </Row>
      <Table columns={columns} dataSource={rowData} />
      <Button onClick={() => setOpen(true)}>열기</Button>
      <span>{name}</span>
      <Modal
        open={open}
        onOk={addUser}
        onCancel={() => onFinish}
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
