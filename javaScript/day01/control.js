/** 
 * 가정
 * 상황을 부여
 *  
 * 콜라 자판기에서 발생할 수 있는 결과 -> 보통 요구사항에 정의 되어있다. (비개발자가 요구사항정의하기에는 한계가있다 개발자가 도움을 주면좋다.)
 * 
 * 
 * 콜라 가격은 1000원, 1회에 1명만 구매
 * 
 * 고장 -> 투입된 금액을 그대로 반환.
 * 투입된 금액과 콜라의 가격이 정확히 일치 -> 콜라
 * 금액이 부족해요 -> 투입된 금액을 그대로 반환
 * 투입된 금액이 콜라의 가격보다 커요 -> 콜라 + 잔돈
 * 
 * 이렇게 요구사항을 분석하는 사고가 필요하다.
 * 
 * -필요한 값-
 * 
 * 고장유무 -> let isError = true/false (참,거짓)
 * 투입된 금액 -> const coin = 사용자의 입력 값
 * 콜라 가격 -> const price = 1000
 * 잔돈 (투입된 금액 - 콜라 가격) = charge = coin - price
 * 
 * 
 */


let isError = true;
const coin = 5000;
const price = 1000;
const charge = coin - price;

// && and절 (둘다 맞아야 true), ||  or절( 둘중하나라도 맞으면 true) 아직 배우진 않았지만, 에러발생하거나 사용자가 넣은 금액이 콜라보다 작은경우를 하나의코드로 하기위해.
// = 할당 , == 약한비교, === 강한비교 설명해라.

if (isError || coin < price) {   // isError 가 참이면 , 금액이 부족해요 -> 투입된 금액을 그대로 반환
    return console.log('코인', coin); // 투입한 금액 그대로 출력.
} 

if (coin === price){  // 투입된 금액과 콜라의 가격이 정확히 일치 -> 콜라
    return console.log('콜라') // 콜라만 출력
}

if (price < coin) { // 투입된 금액이 콜라의 가격보다 커요 -> 콜라 + 잔돈  (charge > 0 이렇게 줘도된다.)
    return console.log('콜라', charge)
}


/* 해당 조건문이 만족하면 더 밑으로 갈 필요가없으므로 
    return(반환) 을 쓴다. 그만실행시키고 돌아간다고.

    node control !! 해보자 !!
*/


// if(조건식) code
// if(조건식)
//      code

// if( a===5)
//      console.log(a)

// if문 아래나 옆에 한줄만있으면 {} 를 생략할 수 있다.

// const a=4

if (a>5){ 

} else if (a>2){

} else if (a>1){

} else {

}

// else if 가독성이 좋지 않기 때문에
// if문을 여러번 사용하는 것을 권장

if(a===5){
    return console.log('5');
}

if(a===4){
    return console.log('4');
}

// 분기가 발생 (경우에 따라 실행해야하는 코드 및 결과 값이 다를 때)
// 조건식 ( >, <, ===, ||, &&) 
// return을 안쓰면 if문을 계속탄다.


// if 문은 조건에의한.    switch문은 값에 따라

let month = 2
// switch(변수명)
switch(month){
    case 1:
        console.log("1월")
        break;
    case 2:
        console.log("2월")
        break;
    case 3:
        console.log("3월")
        break;
    default:
        console.log("범위에 맞는 달을 입력해주세요.")
        break;
}

// if(month === 2){}
// if도 값에 의해서 분기를 결정할 수 있지만
// 만약 값에 종류가 많다면 switch 문을 활용하는 것이 더 좋은 가독성.
// if문 안에 if문이 있어도 가동석이 좋지 않다.
// switch문은 조건식이 안된다. month > 2 (x)
// switch문은 값이 많을 때 if문 12개 쓰면 보기안좋자나
// return을써도되지만 break를 많이 쓰는 추세. 안쓰면 뒤에 값도 같이 출력된다.