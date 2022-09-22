// class Node {
//   constructor(data) {
//     this.data = data;

//     class StackNode extends Node {
//       constructor(data) {
//         this.data = data;
//       }
//     }

//     class Stack {
//       constructor() {
//         this.arr = [];
//       }
//       pop() {
//         return this.arr.pop();
//       }

//       log() {
//         console.log(this.arr);
//       }
//     }

//     const stack = new Stack();
//     stack.push(1);
//     stack.push(2);
//     stack.push(3);
//     stack.log();
//     console.log(stack.pop());
//   }
// }

class Node {
  constructor(data) {
    this.data = data;
  }
}

class StackNode extends Node {
  constructor(data, head) {
    //data와 head 를 받아서 진행하는데 head는 다음 데이터이다.
    super(data);
    //super가 제일 먼저 실행도야함.
    this.head;
    //head 를 생성한다.
  }

  push(data) {
    if (!this.data) this.data = data;
    //만약 data가 없으면 현재 노드의 data에 전달받은 매개변수 data 를 정의한다.
    //pop을 하다보면 전부 없앨 수 있기 때문에 현재 노드의 data 또한 삭제될 수 있ㄱ ㅣ때문이다.
    else if (this.head) {
      //head가 있다는 이야기는 마지막 노드가 아니다. 마지막 순서가 아니다.
      this.head.push(data);
    } else this.head = new StackNode(data);
    //다음 데이터가 없음이 확인되었고, 현재 데이터도 있을 때 head에 새 노드를 추가한다.
  }
  pop() {
    if (tihs?.head?.head) return this.head.pop();
    else if (!this?.head) {
      const temp = this.data;
      this.data = undefined;
      return temp;
    } else {
      const temp = this.head.data;
      this.head = undefined;
      return temp;
    }
  }
}

const stack = new StackNode(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
