//插入排序
//类似打扑克牌，不断往前插到合适的位置
const  insertionSort = (arr) => {
    console.time('插入排序耗时');
    const n  = arr.length;
    //假设第一个arr[0]已经排序
    for (let i = 1; i < n; i++) {
        console.log("Starting from i ",i);
        let position = i;

        const value = arr[i];

        while (i >=0 && arr[position - 1] > value ) {
            console.log("Inside while loop ", position);
            [arr[position],arr[position - 1]] = [arr[position - 1],arr[position]];
            position--;
        }

        console.log("return inserted arr ",arr);
    }
    console.timeEnd('插入排序耗时');
    return arr;
}

var arr1 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4,];
console.log(insertionSort(arr1));