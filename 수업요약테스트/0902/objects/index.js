// //객체 : {}로 묶인 키와 값으로 이루어진 변수(상자?)

// //키의 정식 명칭은 property이다.
// const obj = {
//   //객체란 name과 value 로 구성된 property의 정렬되지 않은 집함.
//   a: 1, //a가 키고 값이 1이다.
//   b: function () {
//     console.log("b");
//   },
//   c: () => {
//     return "c";
//   },
//   //b와 c는 함수 method
// };

// const arr = ["정재훈", "김영준", "김재일", "염예나", "김정일"];
// //배열도 객체이다.
// arr.push(); //push 메서드를 사용
// console.log(arr.length); //배열의 길이를 나타내는 property

// //?? 프로퍼티와 메서드의 차이.

// let tempReturn = arr.indexOf("오늘 점심 메뉴는?");
// // 배열에 있는 아이템을 찾아서 그 위치를 알려준다. 즉 위치값 리턴.
// //없으면 -1, 첫번째에 있으면 0 그 다음은 쫘르륵
// console.log(tempReturn);

// //find의 반환값은 아이템의 순서가 아닌. 아이템 그 자체이다.
// //매개변수에 해당하는 함수의 매개변수(item) 은 배열의 각 아이템을 적용한다.
// //find 함수는 배열의 각 아이템을 순서대로 매개변수함수에 전달하여 리턴값을 확인한다.
// //매개변수 함수에게서 받은 리턴 값이 true 면, 해당 아이템을 리턴하고 find 함수를 종료한다.
// tempReturn = arr.find((item) => {
//   console.log("item" + item);
//   return item == 100; //find 함수의 리턴값은 true 값을 리턴 , return 값이 트루가 아니면 undefined
// });
// //find : 검색할 때 사용할 코드

// console.log(tempReturn);

// const tempArr = [
//   {
//     name: "정재훈",
//     age: 30,
//     area: "대치동",
//   },
//   {
//     name: "염예나",
//     age: 22,
//     area: "하남",
//   },
//   {
//     name: "김성진",
//     age: 27,
//     area: "성남",
//   },
// ];

// // tempArrReturn = arr.find((item) => {
// //   return item === 3;
// // });

// // console.log(tempArrReturn);

// const tempFind = (item) => {
//   return item === "정재훈";
//   //item 이 3이랑 같으면 true를 리턴하고 아니면 false 를 리턴한다.
//   //매개변수 함수가 true 인 아이템들 중 첫 번째를 반환해준다.
// };
// console.log("find");

// console.log(tempFind());

// const tempFindIndex = (item) => {
//   return item === 3;
//   // 매개변수 함수가 true 인 아이템들 중 첫 번째가 배열 내에서 몇 번째 인지 리턴해준다.
// };
// console.log("findIndex");

// console.log(tempReturn);

// tempReturn = arr.map((item) => {
//   return item[0] === "김";
// }); // 매개변수 함수의 return 값 (리턴 값의 자료형은 바뀔 수 있음 ) 들을 배열로 반환한다

// console.log("map");

// console.log(tempReturn);

// const arrFind = function () {
//   for (let i = 0; i < arr.length; i++) {
//     // i는 0부터 arr의 길이까지 하나씩 증가하면서 반복한다.
//     if (tempFind(arr[i])) return arr[i];

//     // tempfind 함수를 호출하고 매개변수로 arr의 i 번째의 아이템을 전달한다.
//     // tempfind 함수가 true 를 리턴하면 arr의 i 번째 아이템을 리턴한다.
//   }
//   //조건에 안걸리면 반복 계속 돌게하다가 조건에 걸리면 리턴으로 함수를 꺼낸다.
// };

// tempReturn = arr.filter((item) => {
//   return item[0] === "김"; //문자열배열의 맨 앞이 김인 item을 찾는다
// });
// console.log(tempReturn);

// //필터는 매개변수함수가 true 인 아이템들을 배열로 리턴해준다.

const tempArr = [
  {
    name: "정재훈",
    age: 30,
    area: "대치동",
  },
  {
    name: "염예나",
    age: 22,
    area: "하남",
  },
  {
    name: "김성진",
    age: 27,
    area: "성남",
  },
];

// console.log(tempArr.find((item) => item.area === "하남"));
// console.log(tempArr.findIndex((item) => item.area === "하남"));
// console.log(tempArr.filter((item) => item.area === "하남"));
// console.log(tempArr.map((item) => item.area === "하남"));

const arr = ["정재훈", "염예나", "김성진", "최원겸", "김선주"];

arr.forEach(function (item) {
  console.log("forEach: " + item);
});

console.log(arr.forEach);

for (let i = 0; i < arr.length; i++) {
  console.log("for : " + arr[i]);
}

arr.reverse();
//순서 거꾸로
console.log(arr);

console.log(arr.join(" / "));
//배열을 문자열로 바꿔준다. 매개변수로 아이템 사이에 넣을 문자를 입력.
console.log(arr.toString());

//문자열로 바꿈
console.log((16).toString(10)); // 10진수
console.log((16).toString(8)); //8진수]

console.log(arr.slice(1, 3));
//배열의 시작이 index니까 0일때 0번째 칸에 있는게 1번 아이템이 아니라
//0번째칸이 시작하는 위치에 1번 아이템이 따라온다고 생각해야함
// [0'김선주', 1'최원겸', 2'김성진', 3'염예나', 4'정재훈'5] <-- 위에서 리버스로 배열 돌렸음
//위 코드는 따라서 1.최원겸,2.김성진3 이런 배열을 리턴한다. 1부터 3사이.

console.log(arr.slice(1, -1));
// -는 뒤에서부터 확인합니다. +일때의 리버스. 5가 0이되고, 4가 -1이됨
// 즉 1~ (끝을 시작점으로 했을때 1인지점)까지

// console.log(arr.splice(1, 3));
// console.log(arr);
// //arr.splice(1,3) 1부터 3개를 자른다. 단 arr을 수정해버린다. <- 이 단점때문에 잘 안씀 - 장점으로 쓸수도

//소트 메서드 공부가 필요함.
console.log(
  arr.sort((curr, next) => {
    if (curr > next) return 1;
    else if (curr < next) return -1;
    else return 0;

    //sort 메서드에서는 정렬을 해주는데 1,0,-1로 정렬 방식을 선택한다.
    //curr(현재) ,next(다음) 인데
    // 현재를 1로 큰것을주고 다음것을 -1로 작은것을 주면 오름차순으로 정렬된다.
  })
);

console.log(
  arr.sort((curr, next) => {
    if (curr > next) return -1;
    else if (curr < next) return 1;
    else return 0;

    //sort 메서드에서는 정렬을 해주는데 1,0,-1로 정렬 방식을 선택한다.
    //  오름차순 반대로 할 시 내림차순이다.
  })
);

console.log(
  [1, 6, 2, 3, 5, 4].sort(function (curr, next) {
    return curr - next;
    //오름차순

    return next - curr;
    //내림차순
  })
);

console.log(arr.sort());
console.log(arr.sort().reverse());
