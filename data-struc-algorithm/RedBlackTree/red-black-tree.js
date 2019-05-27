/**
 * Red-Black tree is a data structure which
 * is type of self-balancing binary search tree.
 *
 * @example
 *
 * var RBTree = require("./src/data-structures/red-black-tree.js").RBTree;
 * var rbTree = new RBTree();
 *
 * rbTree.put(1981, {
 *  name: "John",
 *  surname: "Smith"
 * });
 * rbTree.put(2000, {
 *  name: "Pavlo",
 *  surname： "Popov"
 * })
 */
(function(exports) {
  /**
   * Enum for different colors
   */
  var Colors = {
    RED: 0,
    BLACK: 1
  };
  exports.Colors = Colors;

  /**
   * Node of the Red-Black tree.
   *
   * @private
   * @constructor
   */
  function Node(key, value, left, right, color) {
    this._key = key;
    this._left = left;
    this._right = right;
    this._value = value;
    this._color = color;
  }

  /**
   * Check or node is red.
   */
  Node.prototype.isRed = function() {
    return this._color === Colors.RED;
  };

  /**
   * Changes node color
   */
  Node.prototype.flipColor = function() {};

  /**
   * Red-Black Tree
   *
   * @public
   * @constructor
   */
  exports.RBTree = function() {
    this._root = null;
  };

  /**
   * Add value associated with a given key
   *
   * @public
   */
  exports.RBTree.prototype.put = function(key, value) {
    this._root = this._put(key, value, this._root);
    this._root.setColor(Colors.BLACK);
  };

  /**
   * Helper function for insertion of given key, value pair into Red-Black tree.
   *
   * @private
   * @method
   */
  exports.RBTree.prototype._put = function(key, value, node) {};

  /**
   * Returns true or false depending on whether given node is red.
   *
   * @private
   * @method
   * @param {Node} node Node which should be checked.
   * @returns Returns true if node is red.
   */
  exports.RBTree.prototype.isRed = function(node) {
    if (!node) {
      return false;
    }
    return node.isRed();
  };

  /**
   * Flip the colors of the both neighbors of given node.
   *
   * @private
   * @method
   * @param {Node} node Node
   */
  exports.RBTree.prototype._flipColors = function(node) {
    node.getLeft().flipColor();
    node.getRight().flipColor();
  };

  /**
   * Rotates given node to the left.
   *
   * @private
   * @method
   * @param {Node} node Node
   * @returns {Node} Right node
   */
  exports.RBTree.prototype._rotateLeft = function(node) {};

  /**
   * Rotates given node to the right.
   *
   * @private
   * @method
   * @param {Node} node Node
   * @returns {Node} Left node
   */
  exports.RBTree.prototype._rotateRight = function(node) {};

  /**
   * Get value by the given key.
   *
   * @public
   */
  exports.RBTree.prototype.get = function(key) {
    return this._get(this._root, key);
  };

  /**
   * Get value by the given key.
   *
   * @private
   */
  exports.RBTree.prototype._get = function(node, key) {};

  /**
   * Get Level Order Traversal for given Red Black Tree
   *
   * @public
   */
  exports.RBTree.prototype.levelOrderTraversal = function() {};
})(typeof window === "undefined" ? module.exports : window);
