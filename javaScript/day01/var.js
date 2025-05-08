/* 호이스팅이란? 
선언, 할당, 사용 순서인데
자바스크립트는 실행 과정 중 변수/상수의 사용범위를 정하기 위해 평가하는 단계에서
선언된 변수와 함수가 최상위로 끌여올려지는것처럼 동작. 
var 가 선언이 된 것처럼 사용. --> 휴먼에러 방지를 위해 2015년에는 개선된 let을 사용.
*/

//변수 호이스팅
console.log('var==>', b);  // var는 선언 이전 사용이 가능 -> 휴먼 에러 발생 가능
//console.log('let==>', a);  // let은 선언 이전 사용 시 에러 발생.

//함수 호이스팅
console.log(greet("alice"))  // 선언이되지도않았는데 찍힌다. 이게 호이스팅. 첨에 끌어올려와진다.
function greet(name){
    return `Hello, ${name}`
}


var b = 5;  /* 2015년 이전, ES6 이전 valueable(변수)  */
let a = 5; /* 2015년 이후. */ 
//let a = 5; 동일한 변수명은 재선언 불가능.
var b = 5; // 동일한 변수명 사용 가능 -> 휴먼 에러 발생 가능.

const c = "상수";
c = '에러' // Assignment to constant variable. 상수 변수 할당 해서 에러발생.


//라이브서버는 html 이고 이제 자바스크립트 실행하려고 설치한게 노드!
//var.js 있는 폴더위치 가서 node var (파일명) 쓰면 실행됨.


// 다음 코드는 뭐가 문제일까?
const d = "A"
const e = "B"

console.log(d,e,f);      

