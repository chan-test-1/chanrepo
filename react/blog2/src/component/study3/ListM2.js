import { useEffect, useState } from "react";

function ListM2() {
  const [menu, setMenu] = useState(null); //상위메뉴
  const [subMenu, setSubMenu] = useState(null); //하위메뉴

  //화면 첨 들어가면 최초 1회 실행. 끝에 [] <- 꼭 넣어야 실행됨.

  useEffect(() => {
    setMenu("jh");
  }, []);

  const handleMenuClick = (value) => {
    setMenu(value);
    setSubMenu(null);
  };

  const handleSubMenuClick = (value) => {
    setSubMenu(value);
  };

  return (
    <>
      <h1>두번째 강의</h1>

      {/* 상위 메뉴 */}
      <div>
        <button onClick={() => handleMenuClick("jh")}>이지훈</button>
        <button onClick={() => handleMenuClick("ch")}>이찬이</button>
        <button onClick={() => handleMenuClick("sw")}>이소원</button>
      </div>

      {/* <중간메뉴> */}

      {/* 지훈메뉴 */}
      {menu === "jh" && (
        <div>
          <button onClick={() => handleSubMenuClick("dg")}>용</button>
          <button onClick={() => handleSubMenuClick("gg")}>개구리 </button>
        </div>
      )}
      {/* 찬이 메뉴 */}
      {menu === "ch" && (
        <div>
          <button onClick={() => handleSubMenuClick("mm")}>멍멍</button>
          <button onClick={() => handleSubMenuClick("so")}>소리여친 </button>
        </div>
      )}

      {/* 소원메뉴 */}

      {menu === "sw" && (
        <div>
          <button onClick={() => handleSubMenuClick("bk")}>백마</button>
          <button onClick={() => handleSubMenuClick("rc")}>부자소원 </button>
        </div>
      )}

      {/* 세부내용 */}

      {/* 지후니 */}
      {subMenu === "dg" && <div>용이 나타났다.</div>}
      {subMenu === "gg" && <div>진짜 개구리다.</div>}

      {/* 차니 */}

      {subMenu === "mm" && <div>멍멍이가 물어요</div>}
      {subMenu === "so" && <div>물리기 전에 잘하자</div>}

      {/* 소원 */}
      {subMenu === "bk" && <div>어디든 달려가지요</div>}
      {subMenu === "rc" && <div>소원이 이루어지다</div>}

      <select>
        <option>정수</option>
        <option>비정수</option>
      </select>
    </>
  );
}

export default ListM2;
