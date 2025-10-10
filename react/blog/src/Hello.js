import './App.css';

function Hello() {
  const name = 'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ'
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
}

export default Hello;


// js에서 html 이 가능한 이유. app.js는 html이 아니라 jsx다.
// app.jsx로 써도문제는 없지만 모든 첫 페이지는 js안에 jsx가 들어올걸 기본전제로 하고있어서 js로 표시한다고함.
// 아무튼 app.js는 일반자바스크립트가아니라 jsx (리엑트 bable이란 도구가 html이 읽을 수 있게 변환 ) 
// 그래서 react는 다 jsx 로 만든다고보면됨.

// div 하나만 남기고 다 지운다.
//