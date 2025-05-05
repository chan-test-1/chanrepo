const arr = [1,2,3,4,5];

console.log('3인덱스위치는?',arr.indexOf(3)); // 3의 값이 위치하는 인덱스. 2 , 만약 값이 없다면 -1
console.log('5가있니?',arr.includes(5)); // 배열에 5가 존재하니? true, 만약 값이 없다면 false


// concat(두 배열 합치기.)
// 원본은 그대로. concatArr 은 복사본이 만들어진거다.
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const concatArr = arr1.concat(arr2)
console.log('합쳐진거',concatArr);
console.log('기존껀 멀쩡하니?', arr1)
console.log('기존껀 멀쩡하니?', arr2)

const phoneNumber = ['010','1234','1234'];

// join (배열에있는 값들을 문자열로 바꾸는법.)
const number =  phoneNumber.join('-') //  중간에 하이푼넣고싶으면 파라미터에 쓰면됨. "010-1234-1234"
console.log("배열을 문자열로",number)

// split (문자열을 배열로 바꾸고싶을 때.)
const number2 = number.split('-')  //  배열로 나누는 기준은 파라미터에 넣고 안넣으면 글자하나하나마다 값이된다.

console.log('문자열을 배열로',number2)


// slice (// 특정배열에서 특정 부분만 필요할 때.)
const apt = ["짱구", "오수", "신혼부부", "주인아줌마"]

// 오수랑 신혼부부만 떼어내고싶다.

const sliceApt = apt.slice(1, 3) // 시작은 시작인덱스 종료는 endIndex 직전까지 뽑아오므로 2를 뽑고싶으면 3을 써야된다.
console.log(sliceApt);


// delete 배열 (원하는 인덱스 빈공간으로 만들기.)
delete apt[1] // 빈방으로 만들기. empty item. 비어있는것도 요소가 있는것이므로 length에는 포함.
console.log('빈방만들어졌니?',apt)
 
// splice (지우기 및 채우기)  시작, 종료, 지우고 넣을 요소 , 지우고 넣을 요소 ... 무한 추가 가능.
apt.splice(1,1); // 몇부터 몇까지 지울껀지. 그냥 (1)만 쓰면 1부터 뒤로 다지워짐.
console.log('빈방지워졌니?', apt)

// reverse (반전, 뒤집기)
apt.reverse()
console.log('뒤집어졌니?',apt)




