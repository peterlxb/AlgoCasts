(function(exports) {
  function comparator(a, b) {
    return a - b;
  }

  var heapSort = (function() {
    /**
     * Finds the correct place of given element in given max heap
     *
     * @private
     * @param {Array} array Array
     * @param {Number} index Index of the element which place in
     * the max heap should be found.
     * @param {Number} heapSize Size of the heap.
     * @param {function} cmp Comparison function
     */
    function heapify(array, index, heapSize, cmp) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let largest = index;

      if (left < heapSize && cmp(array[left], array[index]) > 0) {
        largest = left;
      }

      if (right < heapSize && cmp(array[right], array[largest]) > 0) {
        largest = right;
      }

      if (largest !== index) {
        const temp = array[index];
        array[index] = array[largest];
        array[largest] = temp;

        heapify(array, largest, heapSize, cmp);
      }
    }

    /**
     * Builds max heap from given array.根据给定数组构建最大堆
     *
     * @private
     * @param {Array} array Array which should be turned into max heap.
     * @param {function} cmp Comparison function
     * @returns {Array} array Array turned into max heap.
     */
    function buildMaxHeap(array, cmp) {
      for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
        heapify(array, i, array.length, cmp);
      }

      return array;
    }

    /**
     * HeapSort. Turns the input array into max
     * heap and after that sorts it.
     *
     * @example
     *
     * var sort = require("path/src/sorting/heapsort").heapSort;
     * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
     *
     * @public
     * @mudule sorting/heapsort
     *
     */
    return function(array, cmp) {
      cmp = cmp || comparator;
      let size = array.length;
      let temp;

      buildMaxHeap(array, cmp);

      for (var i = array.length - 1; i > 0; i -= 1) {
        temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        size -= 1;
        heapify(array, 0, size, cmp);
      }

      return array;
    };
  })();
  exports.heapSort = heapSort;
})(typeof window === "undefined" ? module.exports : window);
