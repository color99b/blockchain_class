setTimeout(() => {
  console.log("setTimeOut");
}, 2000);
//매개변수 함수에 원하는 코드를 입력한다. 해당 코드는 두번째 매개변수 (시간/ms) 후에! 실행된다. ms = 1/1000초 -> 즉 1000ms = 1second

const interval = setInterval(() => {
  console.log("setInterval");
}, 3000);
//매개변수 함수에 원하는 코드를 입력한다. 해당 코드는 두번째 매개변수 (시간/ms) 마다! 실행된다.

clearInterval(interval);
// 무한 으로 반복되는 setInterval 을 종료한다.
