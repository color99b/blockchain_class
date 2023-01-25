let num: number = 1234;
let str: string = "1234";
let bool: boolean = true;
let und: undefined = undefined;
let nul: null = null;
//und =1234  -> 에러난다.
//typeScript는 자료형(Type)을 확인하기 때문에 같은 자료형만 변수에 정의할 수 있다.

//console.log(num.length); 숫자는 길이가 없다.
console.log(str.length);
let any: any = undefined;
any = "1234";
any = 1234;
//any는 모든 자료형을 포함한다. 지양하는 게 좋다.

let unk: unknown = undefined;
unk = "1234";

console.log(any.length); // 모든 자료형을 포함하고 있기에 각종 메서드 모두 사용 가능.
// console.log(unk.length); //자료형을 모르기에 각종 메서드 모두 사용 불가능.
if (typeof unk === "string") {
  //tpye을 확인한 후에 해당 타입에 대한 메서드, 키를 사용할 수 있다.
  console.log(unk.length);
}

let obj: { a: number; b?: string } = { a: 1 };
// ?는 undefined 를 포함한다.
obj.b = "1234";

let temp: number | string = "1234";
// |를 사용해서 type을 여러 개 지정할 수 있다.

let arr: Array<number> = [1, 2, 3];
// arr.push("asdf"); error
let arr1: [number, string] = [1, "1"];
// 위 방법으로 정의하면 arr1은 index마다 자료형 지정해줘야함.
arr1.push(1); // 정석은 [1,"1",1] 이 [number, string] 형식에 맞지 않아 오류이지만 컴파일해보면 잘 되긴함.
let arr2: string[] = ["1", "a", "b"];
let arr3: Array<any> = [undefined, null, 1, "asdf"];

function funcA(): void {
  console.log("funcA");
}

const funcB = function (): number {
  return 11;
  //return 하는 값이 숫자이기에 ():number;
};

const funcC = (): string => {
  //return에 대한 자료형은 ()뒤에 바로 붙인다.
  return "asdf";
};

function sumA(a, b): number {
  // 매개변수에 type 지정안해주면 any로 설정이 된다.
  return a + b;
}

function sumB(a: number, b: number): number {
  return a + b;
}

const sumC = function (numbers: { a: number; b: number }): number {
  return numbers.a + numbers.b;
};

interface INumbers {
  a: number;
  b: number;
}

const sumD = ({ a, b }: { a: number; b: number }): number => {
  return a + b;
};

const sumE = ({ a, b }: INumbers): number => {
  return a + b;
};
