/*
@@@ 冒泡排序基本上原理就是运行两个嵌套的循环
@@  1. From i = 0 to < array.length
@@  2.  From j = 0 to (array.length - 1)
@@  3.   If the element at j is greater than j+1
@@  4.     Swap elements at j and j+1

@@@ 第一次循环找出最大的，冒泡到最右边，第二次找出第二大的，交换到右边第二个，以此类推
*/

const bubbleSort = (arr) => {
    const n = arr.length;
    // 一共要跑 n遍
    let swapCount;
    for (let i = 0; i < n; i++) {
      // 从第一个元素开始，不断跑到第 n - 1 - i 个
      // 原本是 n - 1，会再加上 - i 是因为最后 i 个元素已经排好了，最后一个是最大的，不用排序
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // 用到ES6的数组交换语法
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        } 
      }
    }
    return arr;
  }

  //console.log(bubbleSort([5, 6, 7, 8, 9, 11, 14]));
  console.log(bubbleSort([7, 5, 6, 31, 23, 9, 14, 11, 2]));