import { useState } from "react";
import "./App.css";
import "./Hello";
import Hello from "./Hello";
import Modal2 from "./Modal2";

function App() {
  //state
  const [따봉, 따봉변경] = useState(0);
  const [글제목, 글제목변경] = useState(["제목3", "제목2", "제목1"]);

  //함수
  const handleLike = () => {
    따봉변경("이찬이 울지마");
  };

  const Modal = (props) => {
    return (
      <div className="modal">
        <h4>{props.title}</h4>
        <p>{props.date}</p>
        <p>상세내용</p>
      </div>
    );
  };

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4 style={{ color: "red" }}>블로그임</h4>
        </div>

        <div className="list">
          {/* <h4>남자 코트 추천 <span>👍</span> 0 </h4> */}
          <h4>
            <span onClick={handleLike} style={{ cursor: "pointer" }}>
              👍
            </span>
            {따봉}
            {글제목[0]}
          </h4>
          <p>버버리</p>
          {/*  <Modal title="가나다" date="2015.5.5" />
          <Modal title="가다" date="2016.5.5" />
          <Modal title="나다" date="2017.5.5" /> */}

          <Modal2 title="가나다" date="20111111.5.5" name="이찬이" />
          <Modal2 title="가다" date="2016.5.5" />
          <Modal2 title="나다" date="2017.5.5" />
        </div>
      </div>
      <div></div>
    </>
  );

  // let post = '강남 우동 맛집'; // 서버에서 가져온 데이터라고 가정.
  // //let [data, setData] = useState('남자 코트 추천');
  // let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', '맛집 추천']);
  // let [따봉, 따봉변경] = useState(0);

  // const handleLike = () => {
  //   따봉변경(따봉+1)
  // }

  // // 따봉대신 like 변수를 넣어보까? 재랜더링이 되나?
  // let like = 0;
  // const testVariable = () => {
  //   like = like+1
  //   console.log(like)
  // }

  // // 제목 변경
  // const handleTitleChange = () => {
  //   let copy = [...글제목];
  //   copy[0] = '여자코트 추천'
  //   글제목변경(copy);
  // }

  // const Modal = () => {
  //   return(
  //     <>
  //       <div className='modal'>
  //         <h4>제목</h4>
  //         <p>날짜</p>
  //         <p>상세내용</p>
  //       </div>
  //       <div></div>
  //     </>
  //   )
  // }

  // return (
  //   <div className="App">
  //     <div className='black-nav'>
  //       <h4 style={{color:'red'}}>블로그임</h4>
  //     </div>
  //     <h4>{post}</h4>
  //     <button onClick={handleTitleChange}>글제목 변경</button>
  //     <div className='list'>
  //       {/* <h4>남자 코트 추천 <span>👍</span> 0 </h4> */}
  //       <h4>{글제목[0]} <span onClick={handleLike} style={{cursor: 'pointer'}}>👍</span> {따봉} </h4>
  //       <p>버버리</p>
  //     </div>
  //     <div className='list'>
  //       <h4>{글제목[1]}</h4>
  //       <p>2월 17일 발행</p>
  //     </div>
  //     <div className='list'>
  //       <h4>{글제목[2]}</h4>
  //       <p>2월 17일 발행</p>
  //     </div>
  //     {/* <Hello/> */}

  //     {/* 상세페이지 */}
  //     {/* <div className='modal'>
  //       <h4>제목</h4>
  //       <p>날짜</p>
  //       <p>상세내용</p>
  //     </div> */}
  //     <Modal></Modal>
  //   </div>
  // );
}

export default App;

// js에서 html 이 가능한 이유. App.js는 html이 아니라 jsx다.
// js로 하든 jsx로 하든 첫글자를 대문자로하면 다 리엑트 jsx로 인식.
// jsx는 리엑트 bable이란 도구가 html이 읽을 수 있게 변환
// jsx문법도 쓸 수 있다. {name, 3항연산, map, className 등
// 여긴 너무 깊게 생각하면안됨. 그냥 리엑트는 jsx 이고 파일명은 대문자로시작. public에 index.html에 app.js 를 넣어준다는 정도.

// div 하나만 남기고 다 지운다.

// 블로그 만들어보자 ~~
// app.css 에 .black-nav 추가함.   --   import './App.css';

// -className-
// css 반영 시 class 가 아닌 className이다 !!! 리엑트에서는 class문법이 따로있어서 겹치기때문에 안씀.

// -중괄호- (데이터 바인딩)
// return 밑. html 영역에서 변수를 호출 할때에는 { }로 묶어주면된다.
// js에서는 우리 배운거 <script>부분에 document.querySeletor('h4').innerHtml = post;
// 전문용어로 데이터 바인딩 ( 데이터를 연결한다. 꽂아넣는다.)

// -스타일-
// 기존 html에서는 <h4 style='color : red'>
// 리엑트는 <h4 style={{color : 'red', fontSize : '16px'}} -> 리엑트는 무조건 {} 중괄호. 근데 style은 객체(object)로 보내야돼서 괄호가 2개임!
// style 에 빼기 기호 있는건 다 안쓴다. font-size (x) fontSize (o)  다 camel case 로 사용. 빼기는 수학기호이므로 안씀.

// 오류
// 리엑트는 화면에 바로 반영되기때문에 오류도 화면에 바로뜬다. 몇번째 라인인지. 에러 내봐봐

// html은 무조건 return ( ) 안에 넣어야되고 하나의 코드로 시작해서 하나의 코드로 끝나야된다. <div> 로 시작했으면 </div> 로 끝나야됨.
// div className="list" 추가, css 추가.

// - state -
// 변수말고 리엑트에서는 state가 있다.
// useState 입력하고 엔터치면 import 되고
// 사용법 --->  let [a,b] = useState('남자 코트 추천)
// a는 state에 보관한 자료 --> 남자 코트 추천
// b는 state를 변경하는걸 도와줌 b('여자 코트 추천')

// a 와 b는 작명을 해야된다.
// 즉 [data, setData] = useState('이지훈') state에 데이터를 보관하고,
// setData('이찬이') 이렇게 바꿀 수 있다.

// 왜 state를 쓰는가? 변수는 바꿔도 html이 수정되지 않는다.
// state는 변경이되면 html이 재 랜더링이 된다.
// 자주변경되는것만!!! 변동 시 자동으로 html에 반영되게 만들고 싶으면 state 쓰자.

// 제목같은건 몇년에 한번 바뀔까말까. 이런건 그냥 하드코딩하거나. 변수써라.

// 저장 시 터미널에 WARNING메세지는 경고다.
// 제일 상단에 /* eslint-disable */ 써놓으면 경고메세지 안뜸.

// - button -
// 글제목[0] 옆에다가 좋아요 만들어보자.
// url에 우클릭하면 이모지라고뜬다. 손가락 가져와서 써보자.
// <h4>남자 코트 추천 <span>👍</span> 0 </h4>  이렇게 만드들었는데 0 부분을 state로 만들면 좋을것 같지않아?
// <h4>{글제목[0]} <span onClick={handleLike} style={{cursor: 'pointer'}}>👍</span> {따봉} </h4>  이렇게 만들었다.
// onClick은 {handleLike} 중괄호 안에 꼭 자바스크립트 함수가 들어가야된다. style은 그냥 내가 줘봤다. 따봉이라는 state만들었음.
// onClick={ () => {console.log('이렇게해도돼')} }       () => {}  익명함수
// state는
// let 따봉;
// 따봉 = 따봉 + 1
// 이런식으로 하면안되고 state변경은 꼭 따봉변경( 따봉 + 1 ) 변경함수를 꼭 써야된다.
// testvariable 함수 주석 풀어서 확인해보자.

// 글제목[0] 을 바꿔보자.
// 배열은 원본건들지말고 얕은복사해서 ... 으로 복사해서 주소값변경해서 쓰라고 배웠었다.
// 그래서 handleTitleChange 함수를 보면 변수에 배열을 얕은복사해서 담고 배열의 0번째를 수정 후 set을 한다.
// ... 을 안쓰고 let copy = 글제목 ;  해버리면 바라보는 주소가 같아서 변경이안된다.(useState특징 : 같은 배열(집주소)인데 왜 바꿔? 안바꿔~)

// -- 숙제 : 지금 배열에 들어있는걸 버튼누르면 가나다순으로 정리하는 기능 만들기
// arr.sort((a, b) => a.localeCompare(b, 'ko'));

// - 상세 페이지 만들기 -
// div className="modal" 추가.    .modal css 추가.

{
  /* <div className='modal'>
  <h4>제목</h4>
  <p>날짜</p>
  <p>상세내용</p>
</div> */
}
// 모달같은 이런 걸 다 쓰다보면 html 이 많이 지저분해진다.
// 그래서 리엑트는 컴포넌트를 제공한다.
// 위 div 5줄을 <Modal/> 이렇게만 쓸 수 있게 축약을 해주는게 컴포넌트화이다.
// 컴포넌트 만드는법은 3가지다. 1.function 만들고   2. return()안에 html 담기   3. <함수명> </함수명> or <함수명/>   쓰기.
// 따로 파일로 만들어도 마찬가지이다. 해당 파일 import해서 <Modal/> 쓰면 된다.
// function Modal 추가.
// return 뒤에 괄호가 꼭 와야되며 엔터치면안된다.
// return() 안에는 마찬가지로 하나의 부모요소만 반환해야된다. div1개.   div2개를 쎃야될경우 <div>로 감싸든가 의미없는 div이면 <></> 그냥 이걸로 감싸도된다.
// <></> 빈괄호는 리엑트에서 지원하는걸로 React Fragment 라고한다.  여러 개의 요소를 감쌀 때, 불필요한 <div> 없이 감쌀 수 있도록 도와주는 가상의 태그.
// 만약 key값을 줘야되면 <React.Fragment key={key}>로 쓰면된다. 불필요한 감싸기 방지용이지 스타일이나 이런건 줄 수 없다. 주려면 진짜 div써라.

// APP.js 도 컴포넌트다!!

// 1차 강의가 여기서 끝.. 뒤에 더보면 유료네..
