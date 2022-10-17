// function testFunc(num, time, func) {
//   setTimeout(() => {
//     console.log(num);
//     func(num);
//   }, time);
// }

// testFunc(1, 1000, () => {
//   testFunc(2, 2000, () => {
//     testFunc(3, 3000, () => {
//       testFunc(4, 4000, console.log);
//     });
//   });
// });

function testPromise(num) {
  return new Promise((resolve, reject) => {
    //resolve 는 실행되었을때
    //reject 는 오류가 났을때
    try {
      if (num > 10) reject({ data: "숫자 너무커용" });
      console.log(num);
      setTimeout(() => {
        resolve(num + 1);
      }, num * 100);
    } catch (error) {
      reject(error);
    }
  });
}

// testPromise(15)
//   .then((data) => {
//     //then : 완료 했을때
//     //resolve 의 매개변수 (num+1) 이 data에 정의된다.
//     console.log("data : " + data);
//   })
//   .catch((err) => {
//     // catch : error 발생시 reject 매개변수가 err에 정의된다.
//     console.log(err);
//   });

async function asyncFunc() {
  // async : promise 를 기다리기위해서 (동기처럼 사용하기 위해)사용
  try {
    let temp = await testPromise(1);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    temp = await testPromise(temp);
    // temp = await testPromise(temp);
    // temp = await testPromise(temp);
    // temp = await testPromise(temp);
    // temp = await testPromise(temp);
    // temp = await testPromise(temp);

    //await + promise : promise 를 기다려서 resolve 값을 반환받는다.
    console.log("temp : " + temp);
  } catch (err) {
    console.log(err);
  }
}

asyncFunc();
