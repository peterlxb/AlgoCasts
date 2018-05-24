const bubbleSort = (arr) => {
    const n = arr.length;
  
    // 一共要跑 n遍
    let swapCount;
    for (let i = 0; i < n; i++) {
      swapCount = 0;
      console.log("Begin in i loop",i);
      // 从第一个元素开始，不断跑到第 n - 1 - i 个
  
      // 原本是 n - 1，会再加上 - i 是因为最后 i 个元素已经排好了，最后一个是最大的，不用排序
  
      // 沒必要跟那些排好的元素比较
  
      for (let j = 0; j < n - 1 - i; j++) {
        console.log("Inside J ", j);
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapCount++;
        }
       
        console.log(arr);
      }
    //   if(swapCount == 0){
    //       break;
    //   }
    }
    
  
    return arr;
  }

  //console.log(bubbleSort([5, 6, 7, 8, 9, 11, 14]));
  console.log(bubbleSort([5, 6, 31, 23, 9, 14, 11, 2]));