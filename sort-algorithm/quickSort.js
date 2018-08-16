/*
@@ 快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，
@@ 其中一部分记录的关键字均比另一部分的关键字小，
@@ 则可分别对这两部分记录继续进行排序，以达到整个序列有序。
*/

/*
@@@ 快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。
@@@ 具体算法描述如下：
@@@ <1>.从数列中挑出一个元素，称为 "基准"（pivot）；
@@@ <2>.重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
@@@ <3>.递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
*/

function quickSort(array, left, right) {
  console.time("1.快速排序耗时");
  if (
    Object.prototype.toString.call(array).slice(8, -1) === "Array" &&
    typeof left === "number" &&
    typeof right === "number"
  ) {
    if (left < right) {
      var x = array[right],
        i = left - 1,
        temp;
      for (var j = left; j <= right; j++) {
        if (array[j] <= x) {
          i++;
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      quickSort(array, left, i - 1);
      quickSort(array, i + 1, right);
    }
    console.timeEnd("1.快速排序耗时");
    return array;
  } else {
    return "array is not an Array or left or right is not a number!";
  }
}

var quickSort2 = function(arr) {
  console.time("2.快速排序耗时");
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.timeEnd("2.快速排序耗时");
  return quickSort2(left).concat([pivot], quickSort2(right));
};

var quickSort3 = arr => {
  //定义交换两个数组元素
  const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
  };
  //开始分区 直接以第一个数作为基准
  const partition = (array, start, end) => {
    let splitIndex = start + 1;
    for (let i = start + 1; i <= end; i++) {
      if (array[i] < array[start]) {
        swap(array, i, splitIndex);

        splitIndex++;
      }
    }

    // 最后把 pivot 跟最后一個比它小的元素互换

    swap(array, start, splitIndex - 1);

    return splitIndex - 1;
  };

  //开始递归排序
  const _quickSort = (array, start, end) => {
    if (start >= end) return array;

    // 在 partition 裡面調整數列，並且回傳 pivot 的 index

    const middle = partition(array, start, end);

    _quickSort(array, start, middle - 1);
    _quickSort(array, middle + 1, end);
    return array;
  };
  return _quickSort(arr, 0, arr.length - 1);
};

var arr = [14, 7, 6, 9, 10, 15, 20, 8];
//console.log(quickSort(arr,0,arr.length-1));
//console.log(quickSort2(arr));
console.log(quickSort3(arr));
