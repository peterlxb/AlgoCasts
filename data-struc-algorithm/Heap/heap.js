/**
 * A binary heap is a complete binary tree
 * which satisfies the heap ordering property
 *
 * @example
 * var Heap = require("path/src/data-structures/heap").Heap;
 *
 * var heap = new Heap(function(a, b) {
 *    return a.birthday - b. birthday;
 * });
 *
 * heap.add({
 *    name: "John",
 *    birthday: 1981
 * });
 *
 * heap.add({
 *     name: 'Pavlo',
 *     birthyear: 2000
 * });
 *
 * heap.add({
 *     name: 'Garry',
 *     birthyear: 1989
 * });
 *
 * heap.add({
 *     name: 'Derek',
 *     birthyear: 1990
 * });
 *
 * heap.add({
 *     name: 'Ivan',
 *     birthyear: 1966
 * });
 *
 * console.log(heap.extract()); // { name: 'Pavlo', birthyear: 2000 }
 * console.log(heap.extract()); // { name: 'Derek', birthyear: 1990 }
 * console.log(heap.extract()); // { name: 'Garry', birthyear: 1989 }
 * console.log(heap.extract()); // { name: 'John', birthyear: 1981 }
 * console.log(heap.extract()); // { name: 'Ivan', birthyear: 1966 }
 */
(function(exports) {
  /**
   * Minimum heap constructor 小顶堆
   *
   * @public
   * @constructor
   * @param {Function} cmp function used for comparison
   */
  exports.Heap = function(cmp) {
    this._heap = [];

    if (typeof cmp === "function") {
      this._cmp = cmp;
    } else {
      this._cmp = function(a, b) {
        return a - b;
      };
    }
  };

  /**
   * Exchanges indexes with start index given as argument
   * to turn the tree into a valid heap.
   * On a single call this method maintains only a single "branch" of the heap.
   *
   * Time complexity: O(log N)
   *
   * @private
   * @param {Number} index the parent
   */
  exports.Heap.prototype._heapify = function(index) {
    var extr = index;
    var left = 2 * index + 1;
    var right = 2 * index + 2;
    var temp;

    if (
      left < this._heap.length &&
      this._cmp(this._heap[left], this._heap[index]) > 0
    ) {
      extr = left;
    }

    if (
      right < this._heap.length &&
      this._cmp(this._heap[right], this._heap[index]) > 0 &&
      this._cmp(this._heap[right], this._heap[left]) > 0
    ) {
      extr = right;
    }

    if (index !== extr) {
      temp = this._heap[index];
      this._heap[index] = this._heap[extr];
      this._heap[extr] = temp;
      this._heapify(extr);
    }
  };

  /**
   * Changes the key
   * complexity: O(log N)
   *
   * @public
   * @param {Number} index Index of the value which should be changed.
   * @param {Number|Object} value New value according to the index.
   * @return {Number} New position of the element.
   */
  exports.Heap.prototype.changeKey = function(index, value) {
    this._heap[index] = value;

    var elem = this._heap[index];
    var parent = Math.floor(index / 2);
    var temp;

    if (elem !== undefined) {
      while (parent >= 0 && this._cmp(elem, this._heap[parent]) > 0) {
        temp = this._heap[parent];

        this._heap[parent] = elem;
        this._heap[index] = temp;
        index = parent;
        parent = Math.floor(parent / 2);
      }
      this._heapify(index);
    }
    return parent;
  };

  /**
   * Updates a given node. This operation is useful in algorithm like Dijkstra,
   * where we need to decrease/increase value of the given node.
   *
   * @public
   * @param {Number|Object} node Node which should be updated.
   */
  exports.Heap.prototype.update = function(node) {
    var idx = this._heap.indexOf(node);

    if (idx >= 0) {
      this.changeKey(idx, node);
    }
  };

  /**
   * Adds new element to the heap
   * Complecity: O(log N)
   *
   * @public
   * @param {Number|Obejct} value Value which will be inserted.
   * @return {Number} Index of the inserted value.
   */
  exports.Heap.prototype.add = function(value) {
    this._heap.push(value);

    return this.changeKey(this._heap.length - 1, value);
  };

  /**
   * Returns current value which is on the top of the heap.
   *
   * @public
   * @return {Number|Object} Current top value.
   */
  exports.Heap.prototype.top = function() {
    return this._heap[0];
  };

  /**
   * Remove and returns the current extremum(顶端) value.
   * which is on the top of the heap.
   *
   * @public
   * @returns {Number|Object} The extremum value.
   */
  exports.Heap.prototype.extract = function() {
    if (!this._heap.length) {
      throw "The heap is already empty!";
    }

    var extr = this._heap.shift();
    this._heapify(0);
    return extr;
  };

  exports.Heap.prototype.getCollection = function() {
    return this._heap;
  };

  /**
   * Checks heap is empty.
   *
   * @public
   * @returns {Boolean} Returns true if heap is empty.
   */
  exports.Heap.prototype.isEmpty = function() {
    return !this._heap.length;
  };
})(typeof window === "undefined" ? module.exports : window);
