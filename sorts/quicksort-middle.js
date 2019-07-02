(function(exports) {
  function compare(a, b) {
    return a - b;
  }

  /**
   * Quicksort algorithm 快速排序算法
   *
   * @public
   * @param {array} array Array which should be sorted.
   * @return {array} Sorted array
   */
  const quickSort = (function() {
    /**
     * Partitions the array in two parts by the middle elements.
     * 比基准元素小的在左边，比基准元素大的在右边
     *
     * @param {array}
     * @param {number} left Left part of the array
     * @param {number} right Right part of the array
     * @return {number}
     */
    function partition(array, left, right, cmp) {
      var pivot = array[Math.floor((left + right) / 2)];
      var temp;

      while (left <= right) {
        while (cmp([array[left], pivot]) < 0) {
          left += 1;
        }

        while (cmp(array[right], pivot) > 0) {
          right -= 1;
        }

        if (left <= right) {
          temp = array[left];
          array[left] = array[right];
          array[right] = temp;
          left += 1;
          right -= 1;
        }
      }
      return left;
    }

    /**
     * 根据待处理数组的左右两边递归地调用自身
     *
     */
    function quicksort(array, left, right, cmp) {
      var mid = partition(array, left, right, cmp);

      if (left < mid - 1) {
        quicksort(array, left, mid - 1, cmp);
      }

      if (right > mid) {
        quicksort(array, mid, right, cmp);
      }
    }

    return function(array, cmp) {
      cmp = cmp || compare;
      quicksort(array, 0, array.length - 1, cmp);
      return array;
    };
  })();
  exports.quickSort = quickSort;
})(typeof window === "undefined" ? module.exports : window);
