
// for in 문법
//객체
let person = {
    name: "alice",
    age: 30,
    job: "developer"
}

for(let key in person){
    console.log(`${key} : ${person[key]}`)
}

//배열
let numbers = [10, 20, 30];

for(let index in numbers){
    console.log(`${index} : ${numbers[index]}`)
}

// for of 문법
// 배열과 같이 반복 가능한 객체에 대해 순차적으로 값을 반환하며 반복 

for(let number of numbers){
    //반복할 코드
    console.log(number)
}



// break
// 반복문을 즉시 종료시킬 때 사용
// 0 부터 10까지 반복하는 코드에서 i값이 5일 때 반복문을 종료하는 코드를 작성하시오.




// continue
// 현재반복을 종료하고 다음 반복으로 넘어감.

