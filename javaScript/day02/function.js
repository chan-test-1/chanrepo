/*  기존소스

let isError = true;
const coin = 5000;
const price = 1000;
const charge = coin - price;


if (isError || coin < price) {   
    return console.log('코인', coin); 
} 

if (coin === price){ 
    return console.log('콜라') // 콜라만 출력
}

if (price < coin) { 
    return console.log('콜라', charge)
} 
*/



// 사용자의 투임금액 -> 바뀔 수 있다.
// isError -> 바뀔 수 있다.
// price -> 내부적인 실행 코드가 바뀌지 않으면 바뀌지 않는 값.
// charege -> 내부적으로 연산되는 값.


// 지역변수, 전역변수, 매개변수(parameter)

// 지역변수는 특정 영역 안.
// 전역변수는 그냥 우리가 선언하는것 어디서든 다씀.
// 매개변수는 값을 넘기고 받아서 쓰는 것. 특정함수에서 유효함. (지역변수처럼 움직임).
function coke(coin, isError ) {
    const price = 1000;
    const charge = coin - price;

    if (isError || coin < price) {   
        return console.log('코인', coin); 
    } 
    
    if (coin === price){ 
        return console.log('콜라') // 콜라만 출력
    }
    
    if (price < coin) { 
        return console.log('콜라', charge)
    } 
}

// console.log(price) // 함수내에서 선언한건 쓸 수없으므로 price is not defined 에러뜬다. 이오류가뜨면 절대안된다. 내가 생각안하고 따라쓰고있다는것.
coke(5000, false)
coke(1000, false)
coke(500, false)
coke(1000, true)


//이렇게 변수에 결과값을 담으려면. coke 에서 반환값을 꼭 줘야된다 이거 설명해라 ! return!!! 언제쓰는지!!
let money = coke(5000, false) // 4000 return charge
money = coke(1000, false) // undefined  
money = coke(500, false) // 500   return coin
money = coke(1000, true) // 1000 return coin

// 다시 한번 말하지만 자바스크립트 함수 생성의 주체는 본인.
// 내가 필요한 값을 지정, 내가 원하는 값을 출력
// 모범답안이 없다. 강사가 지정한게 아니다!
// 함수의 가장 큰 장점은 기능(연산) 재사용!  동작에 맞게 함수명작성해야 협업하는 개발자들이 사용.
// 반환 여부 선택하기(return)


