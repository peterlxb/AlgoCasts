/**
 * Binary search tree
 *
 * @example
 * var BST = require('path-to-algorithms/src/data-structures'+'/binary-search-tree')
 * var bst = new BST.BinaryTree();
 *
 * bst.insert(2000)
 * bst.insert(1989)
 * bst.insert(1991)
 * bst.insert(2001)
 * bst.insert(1966)
 *
 * var node = bst.find(1989);
 * console.log(node.value); // 1989
 */

(function(exports) {
  /**
   * Node of the tree
   *
   * @public
   * @constructor
   *
   */
  exports.Node = function(value, left, right, parent) {
    /**
     * @member {Number|String}
     */
    this.value = value;
    this._left = left;
    this._right = right;
    this._parent = parent;
  };

  /**
   * Binary tree
   *
   * @public
   * @constructor
   */
  exports.BinaryTree = function() {
    this._root = null;
  };

  /**
   * @public
   * @method
   * @param {Number|String} value Node value.
   * @param {Node} current Current node.
   */
  exports.BinaryTree.prototype.insert = function(value, current) {};

  /**
   * In-order traversal from given node
   *
   * @private
   * @param {Node} current Node from which to start the traversal.
   * @param {Function} callback Callback which will be called for each traversed node
   */
  exports.BinaryTree.prototype._inorder = function(current, callback) {};

  /**
   * In-order traversal of the whole binary search tree.
   *
   * @public
   * @method
   * @param {Function} callback Callback which will be called for each traversed node
   */
  exports.BinaryTree.prototype.inorder = function(callback) {};

  /**
   * Post-order traversal from given node.
   *
   * @private
   * @param {Node} current Node from which to start the traversal.
   * @param {Function} callback Callback which will be called for each traversed node
   */
  exports.BinaryTree.prototype._postorder = function(current, callback) {};

  /**
   * Post-order traversal of the whole tree.
   *
   * @public
   * @param {Function} callback Callback which will be called for each traversed node
   */
  exports.BinaryTree.prototype.postorder = function(callback) {};

  /**
   * Pre-order traversal of the tree from given node.
   *
   * @private
   * @param {Node}
   * @param {Function}
   */
  exports.BinaryTree.prototype._preorder = function(current, callback) {};

  /**
   * Pre-order traversal of the whole tree.
   *
   * @public
   * @param {Function} callback Callback which will be called for each traversed node.
   */
  exports.BinaryTree.prototype.preorder = function(callback) {};

  /**
   * Finds a node by its value
   * Average time complexity: O(log N)
   *
   * @public
   * @param {Number|String} value of the node which should be found.
   */
  exports.BinaryTree.prototype.find = function(value) {
    return this._find(value, this._root);
  };

  /**
   * Finds a node by it's value in a given sub-tree.
   * Average time complexity: O(log N)
   *
   * @private
   * @param {Number|String} value of the node which should be found.
   * @param {Node} current node to be checked.
   */
  exports.BinaryTree.prototype._find = function() {
    if (!current) {
      return null;
    }
  };

  /**
   * Replace given child with new one, for given parent
   *
   * @private
   * @param {Node} parent Parent node
   */
  exports.BinaryTree.prototype._replaceChild = function(
    parent,
    oldChild,
    newChild
  ) {};

  /**
   * Remove node from the tree.
   * Average runtime complexity O(log N).
   *
   * @public
   * @param {Node} node to be removed
   */
  exports.BinaryTree.prototype.remove = function(node) {
    if (!node) {
      return false;
    }
  };

  /**
   * Finds the node with minimum value in given sub-tree.
   *
   * @private
   */
  exports.BinaryTree.prototype._findMin = function(node, current) {
    current = current || {
      value: Infinity
    };
    if (!node) {
      return current;
    }
  };

  /**
   * Finds the node with maximum value in given sub-tree.
   *
   * @private
   */
  exports.BinaryTree.prototype._findMax = function(node, current) {};

  /**
   * Finds the node with minimum value in the whole tree.
   *
   * @public
   */
  exports.BinaryTree.prototype.findMin = function() {
    return this._findMin(this._root);
  };

  /**
   * Finds the node with maximum value in the whole tree.
   *
   * @public
   */
  exports.BinaryTree.prototype.findMax = function() {
    return this._findMax(this._root);
  };

  /**
   * Checks if a given node is balanced.
   *
   * @private
   */
  exports.BinaryTree.prototype._isBalanced = function(current) {
    if (!current) {
      return true;
    }
  };

  /**
   * Returns whether the BST is balanced.
   *
   * @public
   * @returns {Boolean} Whether the tree is balanced or not.
   */
  exports.BinaryTree.prototype.isBalanced = function() {
    return this._isBalanced(this._root);
  };

  /**
   * Finds the diameter of the binary tree.
   *
   * @public
   * @returns {Number} the longest path in th BST.
   */
  exports.BinaryTree.prototype.getDiameter = function() {};

  /**
   * Returns the height of the tree.
   *
   * @public
   * @returns {Number} The height of the tree.
   */
  exports.BinaryTree.prototype.getHeight = function() {
    return this._getHeight(this._root);
  };

  /**
   * Recursive worker function for getHeight()
   *
   * @private
   * @param {Node} node Node at current recursive frame.
   * @returns {Number} Height of the Node in the parameter.
   */
  exports.BinaryTree.prototype._getHeight = function(node) {
    if (!node) {
      return 0;
    }
  };

  /**
   * Finds the lowest common ancestor of two nodes.
   *
   * @public
   * @param {Node} firstNode First node to be considered when checking.
   */
  exports.BinaryTree.prototype.lowestCommonAncestor = function(
    firstNode,
    secondNode
  ) {};

  /**
   * Obtains the lowest common ancestor for the given nodes.
   *
   * @private
   */
  exports.BinaryTree.prototype._lowestCommonAncestor = function(
    firstNode,
    secondNode,
    current
  ) {};

  /**
   * Checks if a given node exists in a subtree.
   *
   * @private
   * @param {Node} node Node to check for.
   */
  exports.BinaryTree.prototype._existsInSubtree = function(node, root) {
    if (!root) {
      return false;
    }
  };
})(typeof window === "undefined" ? module.exports : window);
