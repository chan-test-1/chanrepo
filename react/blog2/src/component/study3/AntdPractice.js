import { useState, useEffect } from "react";
import { Table, Button, Input, Modal } from "antd";
import api from "../../api/api";

function AntdPractice() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    addr: "",
    job: "",
    age: "",
  });

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [mode, setMode] = useState("add");

  // 🔥 검색 상태 추가
  const [searchName, setSearchName] = useState(""); // 이름검색

  useEffect(() => {
    getData();
  }, []);

  // ✅ 데이터 조회 (로딩 포함)
  const getData = async () => {
    try {
      setLoading(true);
      const res = await api.get("/people");
      setData(res.data);
    } catch (err) {
      console.error("조회 실패", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ 입력 핸들러 (하나로 통합)
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "age") {
      // 숫자 아니면 무시
      if (!/^\d*$/.test(value)) return;
      if (value !== "" && Number(value) <= 0) return;
    }
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ 등록
  const handleAdd = async () => {
    if (!form.name.trim()) {
      alert("이름은 필수");
      return;
    }
    try {
      await api.post("/people", {
        ...form,
        age: Number(form.age), // 🔥 타입 변환
      });

      setModalOpen(false);
      resetForm();
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ 수정
  const handleEdit = async () => {
    try {
      await api.put(`/people/${form.id}`, {
        ...form,
        age: Number(form.age),
      });

      alert("수정되었습니다.");

      setModalOpen(false);
      getData();
    } catch (err) {
      console.error(err);
      alert("실패");
    }
  };

  // ✅ 삭제 (병렬 처리로 변경)
  const handleDelete = async () => {
    if (selectedRowKeys.length === 0) {
      alert("선택 없음");
      return;
    }

    if (!window.confirm("삭제할까요?")) return;

    try {
      await Promise.all(
        selectedRowKeys.map((id) => api.delete(`/people/${id}`)),
      );
      alert("삭제되었습니다.");
      setSelectedRowKeys([]);
      getData();
    } catch (err) {
      console.error(err);
      alert("삭제되지 않았습니다.");
    }
  };

  const text = searchName.toLowerCase();

  // 🔥 필터링 (검색 기능)
  const nameData = data.filter((item) => {
    return (
      item.name?.toLowerCase().includes(text) ||
      item.addr?.toLowerCase().includes(text) ||
      item.job?.toLowerCase().includes(text) ||
      String(item.age).includes(text)
    );
  });

  const resetForm = () => {
    setForm({
      name: "",
      addr: "",
      job: "",
      age: "",
    });
  };

  const columns = [
    {
      title: "이름",
      dataIndex: "name",
      render: (text, record) => (
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => {
            setMode("detail");
            setForm(record);
            setModalOpen(true);
          }}
        >
          {text}
        </span>
      ),
    },
    { title: "주소", dataIndex: "addr" },
    { title: "직업", dataIndex: "job" },
    { title: "나이", dataIndex: "age" },
    {
      title: "액션",
      render: (_, record) => (
        <Button onClick={() => console.log(record)}>보기</Button>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const a = 1;

  const b = 1;

  const c = 0;

  return (
    <>
      <h2>연습용 테이블</h2>

      {/* 🔥 검색 */}
      <Input
        placeholder="검색"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        style={{ width: 200, marginBottom: 10 }}
      />

      <Table
        rowKey="id"
        columns={columns}
        dataSource={nameData}
        loading={loading}
        rowSelection={rowSelection}
      />

      <Button
        onClick={() => {
          setMode("add");
          resetForm();
          setModalOpen(true);
        }}
      >
        추가
      </Button>
      <Button danger onClick={handleDelete} style={{ marginLeft: 10 }}>
        삭제
      </Button>

      <Modal
        title={
          mode === "add"
            ? "추가화면"
            : mode === "edit"
              ? "수정화면"
              : "상세화면"
        }
        open={modalOpen}
        onOk={() => {
          if (mode === "add") {
            handleAdd();
          } else if (mode === "edit") {
            handleEdit();
          } else {
            setModalOpen(false);
          }
        }}
        okText={mode === "add" ? "등록" : mode === "edit" ? "저장" : "확인"}
        okButtonProps={{
          style: {
            display: mode === "detail" ? "none" : "inline-block",
          },
        }}
        onCancel={() => setModalOpen(false)}
        cancelText={mode === "detail" ? "닫기" : "취소"}
      >
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름"
          readOnly={mode === "detail"}
        />
        <Input
          name="addr"
          value={form.addr}
          onChange={handleChange}
          placeholder="주소"
          readOnly={mode === "detail"}
        />
        <Input
          name="job"
          value={form.job}
          onChange={handleChange}
          placeholder="직업"
          readOnly={mode === "detail"}
        />
        <Input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="나이"
          readOnly={mode === "detail"}
        />
        {mode === "detail" && (
          <Button
            type="primary"
            onClick={() => setMode("edit")}
            style={{ marginTop: 10 }}
          >
            수정
          </Button>
        )}
      </Modal>
    </>
  );
}

export default AntdPractice;
