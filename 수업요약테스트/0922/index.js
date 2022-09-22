console.log((65).toString(2)); //2진수 표기
console.log((65).toString(16)); //16진수표기

//call stack, memory heap
// Web API
// Callback Queue

//중요 키워드 : stack, heap, Queue
//stack : 선입후출 (먼저 들어간게 나중에 나온다) ( 쌓아놓은 책 ) push,pop
function stackOverFlow(count) {
  console.log(count);
  if (++count < 10) stackOverFlow(count);
  console.log(count + "end");
}
stackOverFlow(0);

//큐: 선입선출 먼저 들어간 아이템이 먼저 나온다. push, shift

//heap : 객체 , 배열을 저장할 때 사용한다. 상당히 마구잡이로위치한다.
