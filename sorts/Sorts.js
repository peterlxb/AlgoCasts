/**
 * 冒泡、插入、选择排序
 */

// 冒泡排序
const bubbleSort = arr => {
  if (arr.length <= 1) return;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let hasChanged = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // const temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        hasChanged = true;
      }
    }

    if (!hasChanged) {
      break;
    }
  }
  return arr;
  3;
};

// 插入排序
const insertSort = arr => {
  if (arr.length <= 1) return;

  for (let i = 1; i < arr.length; i++) {
    let position = i;
    const value = arr[i];

    while (i >= 0 && arr[position - 1] > value) {
      [arr[position], arr[position - 1]] = [arr[position - 1], arr[position]];
      position--;
    }

    arr[position] = value;
  }
  return arr;
};

// 选择排序
const selectionSort = arr => {
  if (arr.length <= 1) return;

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

const test = [4, 5, 6, 3, 2, 1];
// console.log(bubbleSort(test));
const testSort = [4, 1, 6, 3, 2, 1];
// console.log(insertSort(testSort));
const testSelect = [4, 8, 6, 3, 2, 1, 0, 12];
console.log(selectionSort(testSelect));
