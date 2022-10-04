function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
let count = 0;
const dataArr = [
  727, 129, 621, 333, 100, 708, 1112, 1121, 1229, 214, 1818, 500, 6, 8282, 119,
  3838,
];

function mergeSort(arr) {
  //분리하는 애
  if (arr.length === 1) return arr;

  const midPoint = parseInt(arr.length / 2);
  count++;
  return merge(
    mergeSort(arr.slice(0, midPoint)),
    mergeSort(arr.slice(midPoint))
  );
}

function merge(leftArr, rightArr) {
  //합치는 애
  const result = [];
  let leftIdx = 0,
    rightIdx = 0;
  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    //좌우 배열의 인덱스가 배열의 크기보다 작으면
    if (leftArr[leftIdx] < rightArr[rightIdx]) {
      // 왼쪽 배열의 아이템이 오른쪽 배열의 아이템보다 작으면
      result.push(leftArr[leftIdx++]);
    } else {
      result.push(rightArr[rightIdx++]);
    }
  }
  return [...result, ...leftArr.slice(leftIdx), ...rightArr.slice(rightIdx)];
  //slice(전달인자 1개) : 전달인자1개 부터 끝까지 잘라낸다.
  //결과+왼쪽남은배열 + 오른쪽 남은배열
  // count--;
  // return [...leftArr, ...rightArr];
  //return leftArr.concat(rightArr); 위 문이랑 같은뜻
}
console.log(dataArr);
console.time("mergeSort");
console.log(mergeSort(dataArr));
console.timeEnd("mergeSort"); //버블정렬은 처음부터 끝까지 대소비교를 항목의 수만큼 반복하여// 단순 무식하게 정렬하는 방식이다.
