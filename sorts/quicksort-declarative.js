(function(exports) {
  function compare(a, b) {
    return a - b;
  }

  /**
   * Quicksort 快速排序，声明式版本
   *
   * @public
   * @param {array}
   * @return {array} Sorted array
   */
  var quickSort = (function() {
    /**
     * 递归得调用自身
     *
     * @private
     */
    function quicksort(array, cmp) {
      if (array.length < 1) {
        return array;
      }

      const [x, ...rest] = array;
      return [
        ...quicksort(rest.filter(v => cmp(v, x) < 0), cmp),
        x,
        ...quicksort(rest.filter(v => cmp(v, x) >= 0), cmp)
      ];
    }

    /**
     * 这个版本的快速排序用了声明式的写法
     * 时间复杂度是  O(Nlog(N))
     *
     * @example
     * var sort = require("src/quicksort-declarative").quicksort;
     *
     * console.log(sort([2, 5, 1, 0, 4])) // [0, 1, 2, 4, 5]
     */
    return function(array, cmp) {
      cmp = cmp || compare;
      array = quicksort(array, cmp);
      return array;
    };
  })();
  exports.quickSort = quickSort;
})(typeof exports === "undefined" ? window : exports);
