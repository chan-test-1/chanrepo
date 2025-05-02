const arr = [1,2,3]

// 객체는 배열에서 특정값을 찾을 때는 - key
// 배열은 순서를 제공하므로 숫자로 이루어진 index(색인) 로 찾는다.

console.log(arr[0]); // 1
console.log(arr[2]); // 3

// 배열은 0부터 시작한다.

// 배열 추가, 삭제, 변경 다 가능.
// push = 마지막에 파라미터로 전달된 값 추가.
arr.push(4)  // [1,2,3,4]
// unshift = 제일앞에 파라미터로 전달된 값 추가.
arr.unshift(0) // [0,1,2,3,4]
// element 요소라고부르는데 html에서도 태그하나라하나를 뜻하고 배열에서는 안에 하나하나를 뜻한다.

// 마지막 배열의 요소(element) 제거  pop!  
// pop과 shift 함수는 return(반환값)이 존재한다. 그래서 마지막 제거 한 숫자를 변수에 담을 수 있다.

const deletedEl = arr.pop() // 맨 뒤 4를제거 
console.log(deletedEl);
console.log(arr);

const unshiftedEl = arr.shift() // 맨 앞 0을제거
console.log(unshiftedEl);
console.log(arr)


