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
    console.time('1.快速排序耗时');
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
        if (left < right) {
            var x = array[right], i = left - 1, temp;
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
        console.timeEnd('1.快速排序耗时');
        return array;
    } else {
        return 'array is not an Array or left or right is not a number!';
    }
}

var quickSort2 = function(arr) {
    //console.time('2.快速排序耗时');
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
    //console.timeEnd('2.快速排序耗时');
　　return quickSort2(left).concat([pivot], quickSort2(right));
};

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
//console.log(quickSort(arr,0,arr.length-1));
console.log(quickSort2(arr));
