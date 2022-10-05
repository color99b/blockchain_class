// function Heap(type = "min") {
//   this.items = [];
//   this.type = type; //기본을 최소 힙으로 준다.
// }

// Heap.prototype.swap = function (idx1, idx2) {
//   const temp = this.items[idx1];
//   this.items[idx1] = this.items[idx2];
//   this.items[idx2] = temp;
// };

// Heap.prototype.getParentIndex = function (idx) {
//   return parseInt((idx - 1) / 2);
// };

// Heap.prototype.getLeftChildIndex = function (idx) {
//   return idx * 2 + 2;
// };

// Heap.prototype.getRightChildIndex = function (idx) {
//   return idx * 2 + 2;
// };

// Heap.prototype.insert = function (item) {
//   this.items.push(item);
//   this.nowIdx = this.items.length - 1;
//   while (true) {
//     if (this.nowIdx < 1) return this.items.length;
//     this.parentIdx = this.getParentIndex(this.nowIdx);
//     if (this.items[this.parentIdx] > this.items[this.nowIdx]) {
//       this.swap(this.parentIdx, this.nowIdx);
//       this.nowIdx = this.parentIdx;
//     } else {
//       break;
//     }
//   }
//   return this.items.length;
// };

// Heap.prototype.remove = function () {
//   this.temp = this.items.shift();
//   this.items.unshift(this.items.pop());
//   this.nowIdx = 0;
//   while (true) {
//     this.leftChild = this.getLeftChildIndex(this.nowIdx);
//     this.rightChild = this.getRightChildIndex(this.nowIdx);
//     if (
//       this.items[this.nowIdx] > this.items[this.leftChild] ||
//       this.items[this.nowIdx] > this.items[this.rightChild]
//     ) {
//       if (this.items[this.leftChild] > this.items[this.rightChild]) {
//         this.swap(this.nowIdx, this.rightChild);
//         this.nowIdx = this.rightChild;
//       } else {
//         this.swap(this.nowIdx, this.leftChild);
//         this.nowIdx = this.leftChild;
//       }
//       this.swap(this.nowIdx, this.leftChild);
//       this.nowIdx = this.leftChild;
//     } else {
//       break;
//     }
//   }
//   return this.temp;
// };

function Heap(type) {
  this.items = [];
  this.type = type;
}

Heap.prototype.swap = function (idx1, idx2) {
  const temp = this.items[idx1];
  this.items[idx1] = this.items[idx2];
  this.items[idx2] = temp;
};

Heap.prototype.getParentIndex = function (idx) {
  return parseInt((idx - 1) / 2);
};

Heap.prototype.getLeftChildIndex = function (idx) {
  return idx * 2 + 1;
};

Heap.prototype.getRightChildIndex = function (idx) {
  return idx * 2 + 2;
};

Heap.prototype.getType = function () {
  return this.type === "max" ? -1 : 1;
};

Heap.prototype.insert = function (item) {
  this.items.push(item);
  this.nowIdx = this.items.length - 1;
  while (true) {
    if (this.nowIdx < 1) return this.items.length;
    this.parentIdx = this.getParentIndex(this.nowIdx);
    if (
      this.items[this.parentIdx] * this.getType() >
      this.items[this.nowIdx] * this.getType()
    ) {
      this.swap(this.parentIdx, this.nowIdx);
      this.nowIdx = this.parentIdx;
    } else {
      break;
    }
  }
  return this.items.length;
};

Heap.prototype.remove = function () {
  this.temp = this.items.shift();
  this.items.unshift(this.items.pop());
  this.nowIdx = 0;
  while (true) {
    this.leftChild = this.getLeftChildIndex(this.nowIdx);
    this.rightChild = this.getRightChildIndex(this.nowIdx);
    if (
      this.items[this.nowIdx] * this.getType() >
        this.items[this.leftChild] * this.getType() ||
      this.items[this.nowIdx] * this.getType() >
        this.items[this.rightChild] * this.getType()
    ) {
      if (
        this.items[this.leftChild] * this.getType() >
        this.items[this.rightChild] * this.getType()
      ) {
        this.swap(this.nowIdx, this.rightChild);
        this.nowIdx = this.rightChild;
      } else {
        this.swap(this.nowIdx, this.leftChild);
        this.nowIdx = this.leftChild;
      }
      this.swap(this.nowIdx, this.leftChild);
      this.nowIdx = this.leftChild;
    } else {
      break;
    }
  }
  return this.temp;
};

let heap1 = new Heap("max");
// heap1.insert(3);
// heap1.insert(5);
// heap1.insert(6);
// heap1.insert(2);
// heap1.insert(12);
// console.log(heap1);
// console.log(heap1.remove());
// console.log(heap1.remove());
// console.log(heap1.remove());
// console.log(heap1.remove());
// console.log(heap1);

heap1.insert(10);
heap1.insert(20);
heap1.insert(28);
heap1.insert(18);
heap1.insert(727);
heap1.insert(9);
heap1.insert(8);
heap1.insert(7);
heap1.insert(6);
heap1.insert(4);
heap1.insert(2);
console.log(heap1.items);
console.log(heap1.remove());
console.log(heap1.items);
console.log(heap1.remove());
console.log(heap1.items);
console.log(heap1.remove());
console.log(heap1.items);

//클래스 아이템의 내부를 찍으려면 전체를 찍으면 안됨
//클래스 자체를 console.log(heap1) 을 때리면 제일 마지막의 클래스 아이템을 줌
//클래스속 items 의 배열을 보고 싶으면 console.log(heap1.items) 라고 접근해야함.


vue JS
vanila js
node js

김영준

데드 : 100;


벤치 : 70;


스쿼트 : 0;
