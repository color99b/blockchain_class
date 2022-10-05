const heapArr = [];
function swap(idx1, idx2) {
  const temp = heapArr[idx1];
  heapArr[idx1] = heapArr[idx2];
  heapArr[idx2] = temp;
}

function heapInsert(item) {
  heapArr.push(item);
  let nowIdx = heapArr.length - 1;
  while (true) {
    if (nowIdx < 1) return heapArr.length;
    const parentIdx = parseInt((nowIdx - 1) / 2);
    if (heapArr[parentIdx] * -1 > heapArr[nowIdx] * -1) {
      swap(parentIdx, nowIdx); //값 바꾸기
      nowIdx = parentIdx; //idx 되돌리기
    } else {
      break;
    }
  }
  return heapArr.length;
}

function heapRemove() {
  const temp = heapArr.shift();
  heapArr.unshift(heapArr.pop());
  let nowIdx = 0;
  while (true) {
    const leftChild = 2 * nowIdx + 1,
      rightChild = 2 * nowIdx + 2;
    if (
      heapArr[nowIdx] * -1 > heapArr[leftChild] * -1 ||
      heapArr[nowIdx] * -1 > heapArr[rightChild] * -1
    ) {
      if (heapArr[leftChild] * -1 > heapArr[rightChild] * -1) {
        swap(nowIdx, rightChild); //값 바꾸기
        nowIdx = rightChild; //idx 되돌리기
      } else {
        swap(nowIdx, leftChild); //값 바꾸기
        nowIdx = leftChild; //idx 되돌리기
      }
      swap(nowIdx, leftChild);
      nowIdx = leftChild;
    } else {
      break;
    }
  }

  return temp;
}

heapInsert(10);
heapInsert(20);
heapInsert(28);
heapInsert(18);
heapInsert(727);
heapInsert(9);
heapInsert(8);
heapInsert(7);
heapInsert(6);
heapInsert(4);
heapInsert(2);
// console.log(heapArr);
// console.log(heapRemove());
// console.log(heapArr);
// console.log(heapRemove());
// console.log(heapArr);
// console.log(heapRemove());
// console.log(heapArr);
// console.log(heapRemove());
// console.log(heapArr);
// console.log(heapRemove());
// console.log(heapArr);
// console.log(heapRemove());
// console.log(heapArr);
