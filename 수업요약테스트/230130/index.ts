//개인키 생성

import cryptoJs from "crypto-js";
const privateKey = cryptoJs.lib.WordArray.random(32).toString;
// ramdom의 매개변수로 몇 byte를 사용할 것인지 전달한다.
//64자가 나와야하기 때문에 32byte를 사용한다.
console.log(privateKey);
console.log(privateKey.length);
// 0~F -> F를 2진수로바꾸면? 1111 -> 4bit -> 총 64자 -> 64*4 -> 256bit
// 1 byte = 8bits => 256 bits = 32bytes

// import crypto from "crypto";
// const moduleKey = crypto.randomBytes(32).toString("hex");
// console.log(moduleKey);

//Double-and-Add 알고리즘을 사용하는 이유
// for(let i=0; i<Math.pow(2,256); i++){}
// console.log(Math.pow(2,256))  // 1.151232135254e+77
// 나타내기 힘든수 표기
// 1.151232135254e+77  => 1.151232135254 / (10^77)
// console.log( 1/ Math.pow(2,256));
