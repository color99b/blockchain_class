function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const dataArr = [
  727, 129, 621, 333, 100, 708, 1112, 1121, 1229, 214, 1818, 500, 6, 8282, 119,
  3838,
];

function selectSort(arr) {
  const tempArr = [...arr];
  for (let i = 0; i < tempArr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < tempArr.length; j++) {
      if (tempArr[minIdx] > tempArr[j]) minIdx = j;
    }
    swap(tempArr, minIdx, i);
  }
  return tempArr;
}

console.log(dataArr);
console.time("selectSort");
console.log(selectSort(dataArr));
console.timeEnd("selectSort"); //버블정렬은 처음부터 끝까지 대소비교를 항목의 수만큼 반복하여// 단순 무식하게 정렬하는 방식이다.
