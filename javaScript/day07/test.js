// 변수 선언 실행
// 변수명 name 에 문자열 훈을 선언

const name = "훈";
console.log(`name은 ${name}이다`);

// 객체 선언 실행
// 객채명 coffee 에 키 name, price 입력

const coffee = {
  name: "aa",
  price: 1000,
};
console.log(coffee.name, coffee.price);

// 배열 선언 실행
// 배열명 english 에 문자열 a,b,c,d,e 선언

const english = ["a", "b", "c", 2, 3];
console.log(english[0]);

// 함수 선언, 실행
// 함수명 bag 을 선언하고 bag 실행 시 문자열 똥 과 위에 선언 한 변수명 name 을 출력

function bag() {
  console.log("똥", name);
}
bag();

// 함수 school 를 만들어  배열 ban 반복문으로 ban.length까지 실행
// 반복해서 학생이름과 번호를 뽑아오자. 만약 check 이  false 이면 가져오지마..

const stu1 = {
  name: "훈",
  num: 1,
  check: true,
};

const stu2 = {
  name: "소리",
  num: 2,
  check: false,
};

const stu3 = {
  name: "찬",
  num: 3,
  check: true,
};

const ban = [stu1, stu2, stu3];

const ban1 = [
  {
    name: "훈",
    num: 1,
    check: true,
  },
  {
    name: "소리",
    num: 2,
    check: false,
  },
  {
    name: "찬",
    num: 3,
    check: true,
  },
  "안녕하세요",
  { name: "훈" },
];

ban[0].name;
ban1[3].name;

ban1[4];

function school() {
  for (let i = 0; i < ban.length; i++) {
    if (i !== 3) {
      if (ban[i].check === true) {
        console.log(ban[i].name, ban[i].num);
      }
    } else {
      console.log(ban[i]);
    }
  }
}
school();

// 변수 선언 실행
// 변수명 name 에 문자열 훈을 선언

//const name = "훈";
//console.log(`변수명은 name 이고 값은 ${name}이다.`);

// 객체 선언 실행
// 객채명 coffee 에 키 name, price 입력

//const coffee = {
//  name: "aa",
//  price: 5000,};
//console.log(coffee.name, coffee.price);

// 배열 선언 실행
// 배열명 english 에 문자열 a,b,c,d,e 선언

//const english = ["a", "b", "c", "d", "e"];
//console.log(english[0]);

// 함수 선언, 실행
// 함수명 bag 을 선언하고 bag 실행 시 문자열 똥 과 위에 선언 한 변수명 name 을 출력

//function bag() {
//console.log("똥", name);}
//bag();

//const stu1 = { name: "이찬이", num: 1, check: true };
//const stu2 = { name: "이지훈", num: 2, check: true };
//const stu3 = { name: "짜니", num: 3, check: false };
//const ban = [stu1, stu2, stu3];

// 함수 school 를 만들어  배열 ban 반복문으로 ban.length까지 실행
// 반복해서 학생이름과 번호를 뽑아오자. 만약 check 이  false 이면 가져오지마..

//function school() {
// for (let i = 0; i < ban.length; i++) {
//    if (ban[i].check === true) {
//      console.log("ban", ban);
//      console.log("i", i);
//      console.log("ban[i]", ban[i]);
//      console.log(ban[i].name, ban[i].num);
//      console.log(
("-------------------------------------------------------------------------------------------");

//      );
//    }
//  }
//}
//school();

// // 변수 선언 실행
// let age = 20;
// const name = "찬";

// console.log(`나의 이름은 ${name}이고 나이는 ${age}입니다.`);

// // 객체 선언 실행

// const person = {
//   name: "지훈",
//   age: 30,
//   isStudent: true,
// };
// const person1 = {
//   name: "찬",
//   age: 30,
//   isStudent: true,
// };
// const person2 = {
//   name: "찬찬",
//   age: 30,
//   isStudent: true,
// };
// console.log(`이름은 ${person.name}이고 나이는 ${person.age}입니다.`);

// // 배열 선언 실행
// const bag = ["w가방", "CD가방", "내가방", "니가방"];

// console.log(bag[0]);

// // 조건문 실행

// if (person.name === "지훈") {
//   console.log("아아아");
// } else {
//   console.log("다다다");
// }

// // 반복문 실행  0 부터 10까지 반복문을써서 출력하시오.
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // 함수 선언, 실행
// function abc(name) {
//   console.log(name);
// }

// abc("가나다");
// abc("가나다123");

// //배열 abcd 안에 객체 person 넣어보자.

// let abcd = [person, person1, person2];

// // 함수 student 를 만들어 를 넣고 그배열 abcd를 반복문으로 abcd.length까지
// // 반복해서 이름과 나이를 뽑아오자. 만약 isStudent가 트루일때만.

// function student() {
//   for (let i = 0; i < abcd.length; i++) {
//     console.log(abcd[i].name);
//   }
// }
// student();
