/*


//어떠한 핸드폰번호도 될 수 있음.
"010-0000-0000"
핸드폰 번호의 가운데 자리를 ****로 바꿔서 화면에 출력

가운데자리 감추기! (개인정보 보안)

input
"010-0000-0000"
"010-1234-1234"

output
"010-****-0000"
"010-****-1234"

*/ 



// 글자 -> replace
// 배열 -> splice, split, join

// 010-0000-0000 -> 배열로 변환
// 010-0000-0000.split('-');
// const arr = ['010','0000','0000']

// arr[1] = "****"
// arr.splice(1, 1, '****')

// console.log('aa',arr.join('-')) // 010-0000-0000


// 1~3줄 짜리 문제

function parseNumber (phoneNumber) {
    const numberArr = phoneNumber.split('-')
    numberArr[1] = '****'
    return numberArr.join('-')
}

console.log(parseNumber("010-1234-1234"))