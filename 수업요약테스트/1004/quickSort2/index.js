const dataArr = [
  727, 129, 621, 333, 100, 708, 1112, 1121, 1229, 214, 1818, 500, 6, 8282, 119,
  3838,
];

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr.shift();
  const leftArr = [];
  const rightArr = [];
  while (arr.length) {
    const temp = arr.shift();
    if (temp < pivot) leftArr.push(temp);
    else rightArr.push(temp);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(dataArr));

// function quickSortHelper(arr, left, right) {

//   const pivotIdx = left++;
//   while (left <= right) {
//     while (arr[pivotIdx] > arr[left]) left++;
//     while (arr[pivotIdx] < arr[right]) right--;

//     const temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
//   }

//   const temp = arr[pivotIdx];
//   arr[pivotIdx] = arr[right];
//   arr[right] = temp;

//   return right;
// }

// console.log(quickSort(dataArr));
