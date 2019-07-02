const mergeSort = arr => {
  const merge = (array, start, middle, end) => {
    // 定义一个临时数组来存放数据
    let tmp = [];
    let nowIndex = 0;
    let left = start;
    let right = middle + 1;

    // 判断连个数组大小，插入到tmp 中
    while (left <= middle && right <= end) {
      if (array[left] < array[right]) {
        tmp[nowIndex++] = array[left++];
      } else {
        tmp[nowIndex++] = array[right++];
      }
    }

    // 左右两边有一边排序完，排序另外一边
    while (left <= middle) {
      tmp[nowIndex++] = array[left++];
    }

    while (right <= end) {
      tmp[nowIndex++] = array[right++];
    }

    // tmp 排序完，追加到array中
    for (let i = start; i <= end; i++) {
      array[i] = tmp[i - start];
    }
  };

  const _mergeSort = (array, start, end) => {
    if (end <= start) return;

    const middle = Math.floor((start + end) / 2);

    _mergeSort(array, start, middle);
    _mergeSort(array, middle + 1, end);
    merge(array, start, middle, end);
    return array;
  };

  return _mergeSort(arr, 0, arr.length - 1);
};

const tmp = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(tmp));
