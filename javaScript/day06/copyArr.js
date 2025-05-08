//배열 복사

const arr1 = [1,2,3] 
const arr2 = [...arr1]  // arr1을 복사.

console.log('arr2',arr2);

//배열 병합

const arr3 = [1,2,3]
const arr4 = [4,5,6]

const merged = [...arr3, ...arr4];

console.log('merged',merged)


//객체 전개 구문

const obj1 = {a : 1, b : 2}
const obj2 = {...obj1}

console.log('obj2',obj2)


// 객체 병합
const obj3 = {a : 1, b : 2};
const obj4 = {b : 3, c : 4};

const merged2 = {...obj3, ...obj4} // 키값 b가 2개다. 늦게온 b가 앞에온 b를 잡아먹는다.

console.log('merged2',merged2)


// 파라미터로 전개구문 넘기기

function printNumbers(...nums) {
    console.log('nums',nums);
    console.log('...nums',...nums)
}

printNumbers(...arr1)


// 얕은 복사 (Shallow Copy)
// 객체나 배열의 1단계 값만 복사
// 복사된 데이터가 객체나 배열과 같은 참조형 데이터라면, 원본과 복사본이 같은 참조를 공유

const obj5 = { a : { b : 1}, c: 13} // 객체안이든 배열안이든 자바스크립트는 모든걸 넣을 수 있다. 객체안에 객체를 보여주고있다.
const obj6 = { ...obj5}
obj6.a.b = 99;
obj6.c = 77;

console.log('obj5.a.b', obj5.a.b) // 복사해서 obj6 를 바꿨는데 obj5 값이 바껴있다. 주소를 바라보기 때문. (얕은복사를 했기 때문)
console.log('obj5.c', obj5.c) // 객체나 배열이 아니므로 주소를 갖고있지않기때문에 변경되지 않음. 1단계복사. 


// 깊은 복사(depp copy)
// 깊은 복사는 객체나 배열의 모든 수준의 데이터를 재귀적으로 복사하여 원본과 복사본이 완전히 독릭접이게 만듬.
// 중첩된 객체나 배열도 새로운 메로리 공간에 복사.
// 원본을 변경해도 복사본에 영향이 없고, 그반대도 마찬가지.

const obj7 = { a: 1, b: {c: 7}};
const obj8 = JSON.parse(JSON.stringify(obj7))  // obj7 을 "a:1, b:{c:7}" JSON형식의 문자열로바꿔주고 -> json.stringify  , 그걸 json(객체)으로 다시바꾸는 방법. json.parse

obj8.b.c = 99;

console.log(obj7.b.c)





