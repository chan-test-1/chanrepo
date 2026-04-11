import { useState } from "react";

function ListM() {
  const [menu, setMenu] = useState(null); // 상위 메뉴
  const [subMenu, setSubMenu] = useState(null); // 하위 메뉴

  const handleMenuClick = (value) => {
    setMenu(value);
    setSubMenu(null); // 상위 메뉴 바뀌면 하위 초기화
  };
  return (
    <>
      <h1>물품관리</h1>

      {/* 상위 메뉴 */}
      <div style={{ marginBottom: "25px" }}>
        <button onClick={() => handleMenuClick("취득")}>취득관리</button>
        <button
          onClick={() => handleMenuClick("사용")}
          style={{ marginLeft: "15px" }}
        >
          사용관리
        </button>
        <button
          onClick={() => handleMenuClick("처분")}
          style={{ marginLeft: "15px" }}
        >
          처분관리
        </button>
      </div>

      {/* 취득관리 하위 버튼 */}
      {menu === "취득" && (
        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setSubMenu("보유")}>물품보유현황</button>
          <button
            onClick={() => setSubMenu("세출")}
            style={{ marginLeft: "15px" }}
          >
            세출외취득
          </button>
        </div>
      )}
      {/* 사용관리 하위 버튼 */}
      {menu === "사용" && (
        <div>
          <button onClick={() => setSubMenu("요청")}>이동요청</button>
          <button onClick={() => setSubMenu("승인")}>이동승인</button>
        </div>
      )}

      {/* 처분관리 하위버튼 */}
      {menu === "처분" && (
        <div>
          <button onClick={() => setSubMenu("불용")}>불용처리</button>
          <button onClick={() => setSubMenu("처분")}>처분처리</button>
        </div>
      )}

      {/* 내용 영역 */}
      <div style={{ fontSize: "22px", fontWeight: "bold", marginTop: "20px" }}>
        {subMenu === "보유" && <div>내용 1</div>}
        {subMenu === "세출" && <div>내용 2</div>}
      </div>
      <div>
        {subMenu === "요청" && <div>요청내용</div>}
        {subMenu === "승인" && <div>승인내용</div>}
      </div>
      <div>
        {subMenu === "불용" && <div>불용품</div>}
        {subMenu === "처분" && <div>처분물품</div>}
      </div>
    </>
  );
}

export default ListM;
