function quickSort(arr, left, right) {
  //퀵정렬 함수
  let idx = quickSortHelper(arr, left, right);
  if (left < idx - 1) quickSort(arr, left, idx - 1);
  if (idx + 1 < right) quickSort(arr, idx + 1, right);
  return arr;
}

function quickSortHelper(arr, left, right) {
  //퀵정렬을 도와주는 함수
  const pivotIdx = left++;
  while (left <= right) {
    while (arr[pivotIdx] > arr[left]) left++;
    while (arr[pivotIdx] < arr[right]) right--;
    if (left <= right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  const temp = arr[pivotIdx];
  arr[pivotIdx] = arr[right];
  arr[right] = temp;

  return right;
}

const dataArr = [
  727, 129, 621, 333, 100, 708, 1112, 1121, 1229, 214, 1818, 500, 6, 8282, 119,
  3838,
];

console.log(quickSort(dataArr, 0, dataArr.length - 1));

//sort 메서드에는 매개변수로 함수를 전달할 수있는데
//매개변수 함수의 return 으로 -1, 1, 0 이 들어갈 수 있으며
// -n , n , true, false 등을 반환할 수 있다.
// 반환값은 올므차순 또는 내림차순을 결정한다.
console.log(dataArr.sort((b, a) => b - a));
//b 부터 a까지 , b - a 순, a -b는 reverse
