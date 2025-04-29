//일반함수
function printHi() {
    console.log('hi')
}

//화살표함수
const logHi = () => {
    console.log('hi')
}

/*
    ES6 (자바스크립트 버전) 부터 화살표 함수가 나왔다.
    이크마스크립트. 자바스크립트 언어의 표준. 
    ECMA는 국제 정보통신 시스템 표준화를 위한 비영리단체이다.
    ES6(ECMAscript2015)는 다양한 API와 편의기능들이 추가 되었다.
*/



// 익명함수, 이름만지우면된다. 하지만 호출할 수 없다.
(function(){
    console.log('hi')
});

//화살표 익명
() => {
    console.log('hi')
};
    

// 즉시실행함수와 같이쓰는데 뒤에 () 하나 더붙인게 즉시실행함수. (1,2)를 던지면서 실행.
(function(num1, num2){
    console.log('hi')
})(1, 2);


const funcA = () => {
    console.log('hi')
};

(funcA)(); // 기명함수도 즉시실행함수로 넣을 수 있다.


// callback 함수
// map -> 매개변수로 전달받은 함수를 5번 실행하는 함수
function map(callbankFn){
    callbankFn(1)
    callbankFn(2)
    callbankFn(3)
    callbankFn(4)
    callbankFn(5)
}

function printNumber(num){
    console.log(num);
}

map(printNumber)   // map(printNumber()) (X)  실행문넣는게아니다! 함수자체를 넣는거다!

//실행결과는?




map(function printNumber(number) {  // 1회성 기명함수, 개발자에게 가이드라인
    console.log('익명함수',number)
})

// 가이드라인 갖고 어떻게 다 알아들어?  하지만 주석없이도 알아볼수있는 코드가 언제나 옳다.

// jsDoc 문서화 기법 (회사마다 다름)

/**
 * @description 이 함수는 콜백함수를 전달받아서 5회 실행하는 함수입니다.
 * @param {Number} 5
 * @author Jihoon Lee
 * @date 2023-04-29
 * @example
 * a()
 */
const a = () => { // 이렇게 함수를 바로밑에 쓰고 제일 밑에서 a() 를 실행한곳에 마우스를 대보면 설명이 나옴.
}


map(function (number) {  // 익명함수
    console.log('익명함수',number)
})

map((number) => {  //익명 화살표 함수
    console.log('익명 화살표 함수',number)
})

a();


// 추상화(abstraction)  코드 잘짠다라는 개념은 절대 속도가 아닌 추상적인 개념이 없어야된다.

/*
    userService.login(auth.KaKao)
    
    userService.login(
        ..
        .
        .
        .
        .
        .
        .
        .
        .
        .
    )

*/    


// 어셈블리어 (010101010110101000101010101) 
// C언어 (저급언어)
// JavaScript (고급언어)
// 저급언어일수록 속도가 빠르다 (컴파일이 없으므로)
// IoT 같은게 관심있으면 어셈블리어, C언어 1Byte 낭비를 하면안되고 속도가 중요하므로. (업데이트가 필요없다.) 다른버전 로봇청소기가 나오지.

// 웹어플리케이션은 유지보수가 많고 하드웨어도 좋은편이다. 
// 그래서 보기좋은코드가 잘짜는 코드이다. 추상적이지 않는게 실력이다.
