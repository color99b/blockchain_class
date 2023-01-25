declare type TError<T> = {
  isError: true;
  msg: T;
};
// <T> << 타입을 가져다가 호출할 때 어떤 type인지 받겠다.
// <R> || <T> type계의 매개변수임 제네릭이라고 한다.
declare type TResult<T> = {
  isError: false;
  value: T;
};
