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
  count--;
  return [...leftArr, ...rightArr];
}
console.log(dataArr);
console.time("mergeSort");
console.log(mergeSort(dataArr));
console.timeEnd("mergeSort"); //버블정렬은 처음부터 끝까지 대소비교를 항목의 수만큼 반복하여// 단순 무식하게 정렬하는 방식이다.
