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

const char = "010-1234-1234";
const number = char.split("-");

console.log("여기가 넘버를 찍는 부분이야==============>", number);

number.splice(1, 1, "****");
console.log("**** ==============>", number);

//.splice;
// 글자 -> replace
// 배열 -> splice, split, join

// 010-0000-0000 -> 배열로 변환
// 010-0000-0000.split('-');
// const arr = ['010','0000','0000']

// arr[1] = "****"
// arr.splice(1, 1, '****')

// console.log('aa',arr.join('-')) // 010-0000-0000

// 1~3줄 짜리 문제

function parseNumber(phoneNumber) {
  const numberArr = phoneNumber.split("-");
  numberArr[1] = "****";
  return numberArr.join("-");
}

for (i = 0; i < number.length; i++) {
  parseNumber(number[i]);
}
console.log(parseNumber("010-1234-1234"));
console.log(parseNumber("010-1234-7777"));

number = ["010", "010", "010", "010", "010", "01"];
