const queueNode = {
  arr: [],
  push(data) {
    this.arr.push(data);
  },
  shift() {
    return this.arr.shift();
  },
  get() {
    return this.arr;
    //arr 에 직접적으로 접근하지 못하게 하도록, arr 자체를 가져오게 하지 못하게 한다.
  },
};

queueNode.push(0);
queueNode.push(1);
queueNode.push(2);
queueNode.push(3);
console.log(queueNode.shift());
console.log(queueNode.get());

class Node {
  constructor(data) {
    this.data = data;
  }
}

class Queue extends Node {
  constructor(data) {
    super(data);
    this.head;
  }

  push(data) {
    if (!this.data) this.data = data;
    //만약 data가 없으면 현재 노드의 data에 전달받은 매개변수 data 를 정의한다.
    //pop을 하다보면 전부 없앨 수 있기 때문에 현재 노드의 data 또한 삭제될 수 있ㄱ ㅣ때문이다.
    else if (this.head) {
      //head가 있다는 이야기는 마지막 노드가 아니다. 마지막 순서가 아니다.
      this.head.push(data);
    } else this.head = new queueNode(data);
    //다음 데이터가 없음이 확인되었고, 현재 데이터도 있을 때 head에 새 노드를 추가한다.
  }

  shift() {
    const temp = this.data;

    if (this.head) {
      //헤드가 있으면
      this.data = this.head.data;
      //현재 노드의 데이터를 헤드의 데이터로정의한다.
      if (!this.head?.head) {
        //헤드의 헤드가 없으면( 다음 헤드가 마지막 노드면 )
        delete this.head;
        //헤드를삭제한다.
      } else {
        this.head.shift();
        //헤드의 헤드가 있으면 ( 현재 노드의 헤드가 마지막 노드가 아니면)
        //헤드의 shift 메서드를 호출한다.
      }
    } else {
      //ㅎ헤드가 없으면 현재 노드가 끝이기 때문에 data를 없애준다.
      this.data = undefined;
    }
    return temp;
  }
}
