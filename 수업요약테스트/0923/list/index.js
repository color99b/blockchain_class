const listNode = {
  data: undefined,
  next: undefined,

  insert(data) {
    if (this.next) this.next.insert(data);
    //다음 노드가 있으면 그 노드에 추가
    else
      this.next = {
        ...listNode,
        data,
      };
  },
};

const listRoot = { ...listNode, data: 1 };
listRoot.insert(2);
listRoot.insert(3);
console.log(listRoot);

document.getElementById("event-listener").addEventListener("click", () => {
  console.log(1);
});
document.getElementById("event-listener").addEventListener("click", () => {
  console.log(2);
});
document.getElementById("event-listener").addEventListener("click", () => {
  console.log(3);
});

function SingleNode(data) {
  this.data = data;
  this.next = undefined;
}

function SingleList() {
  this.head = undefined;
  this.tail = undefined;
  this.size = 0;
}

SingleList.prototype.insert = function (data) {
  //클래스이기대문에 prototype 에 method 로 추가한다.
  // ?? prototype 의 정의
  if (this.head) {
    //머리가 없으면, 리스트가 하나도 없다
    this.head = new SingleNode(data);
    this.tail = this.head;
  } else {
    //머리가 있으면
    const temp = new SingleNode(data);
    this.tail.next = temp;
    //현재 꼬리에 만들어진 노드를  다음 노드로 연결한다.
    this.tail = temp;
    //만든 노드를 꼬리에 정의한다.
  }
  return ++this.size;
};

const listArr = {
  arr: [],
  insert(data) {
    this.arr.push(data);
    return this.arr.length;
  },
  remove(data) {
    let isDelete = false;
    this.arr.filter((item) => {
      if (item != data || isDelete) {
        return true;
      } else {
        isDelete = true;
        return false;
      }
    });
    return this.arr.length;
  },
  contains(data) {
    return this.arr.contains(data);
  },
};

SingleList.prototype.remove = function (data) {
  if (!this.head) return;
  //헤드가 없으면 리턴

  if (this.head.data == data) {
    //헤드의 데이터가 삭제하려는 데이터이면
    const temp = this.head.next;
    delete this.head;
    this.head = temp;
    this.size--;
    return;
  }

  let curr = this.head;
  //현재 어떤 노드를 확인하는가? 현재의 노드를 변수에 정의

  while (curr !== this.tail) {
    //현재 노드가 끝인지 확인, 끝이 아니면 실행.
    if (!curr.next) return;
    // 다음 노드가 없으면 리턴
    if (curr.next.data === data) {
      // 현재 노드의 다음 노드의 데이터가 삭제하려는 데이터인가
      const temp = curr.next.next;
      // 현재 노드의 다음 노드의 다음 노드를 임시로 정의
      delete curr.next;
      curr.next = temp;
      this.size--;
      return;
    }
    curr = curr.next;
    //다음 노드가 삭제할 노드가 아니라면 현재노드를 다음 노드로 정의
  }
};

SingleList.prototype.contains = function (data) {
  let curr = this.head;

  if (curr.data === data) return true;

  while (curr !== this.tail) {
    if (curr.next.data === data) return true;
    curr = curr.next;
  }

  return false;
};

function ClassTest1(data) {
  this.a = 1;
  this.b = data;
}
const tempTest1 = new ClassTest1(2);
class ClassTest2 {
  constructor(data) {
    this.a = 1;
    this.b = data;
  }
}
const tempTest2 = new ClassTest2(3);
