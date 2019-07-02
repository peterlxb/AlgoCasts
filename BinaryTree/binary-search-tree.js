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
   * Insert a node into the binary search tree.
   * 时间复杂度 O(log N)
   *
   * 新插入的数据一般都是在叶子节点上，只需要从根节点开始，依次比较要插入的数据和节点的大小关系。
   *
   * @public
   * @method
   * @param {Number|String} value Node value.
   * @param {Node} current Current node.
   */
  exports.BinaryTree.prototype.insert = function(value, current) {
    if (this._root === null) {
      this._root = new exports.Node(value, null, null, null);
      return;
    }

    var insertKey;
    current = current || this._root;

    if (current.value > value) {
      insertKey = "_left";
    } else {
      insertKey = "_right";
    }

    if (!current[insertKey]) {
      current[insertKey] = new exports.Node(value, null, null, current);
    } else {
      this.insert(value, current[insertKey]);
    }
  };

  /**
   * In-order traversal from given node 中序遍历
   *
   * 对于树中的任意节点，先打印它的左子树，然后打印本身，最后打印右子树
   * @private
   * @param {Node} current Node from which to start the traversal.
   * @param {Function} callback Callback which will be called for each traversed node
   */
  exports.BinaryTree.prototype._inorder = function(current, callback) {
    if (!current) {
      return;
    }

    // 处理左子树
    this.inorder(current._left, callback);
    if (typeof callback === "function") {
      // 处理自身
      callback(current);
    }
    // 处理右子树
    this._inorder(current._right, callback);
  };

  /**
   * In-order traversal of the whole binary search tree. 中序遍历整个二叉树
   *
   * @public
   * @method
   * @param {Function} callback Callback which will be called for each traversed node
   */
  exports.BinaryTree.prototype.inorder = function(callback) {
    return this._inorder(this._root, callback);
  };

  /**
   * Post-order traversal from given node. 后序遍历
   *
   * 对于树中的任意节点，先打印它的左子树，然后打印右子树，最后打印自身
   * @private
   * @param {Node} current Node from which to start the traversal.
   * @param {Function} callback Callback which will be called for each traversed node
   */
  exports.BinaryTree.prototype._postorder = function(current, callback) {
    if (!current) {
      return;
    }
    // 分别处理 左子树，右子树
    this._postorder(current._left, callback);
    this._postorder(current._right, callback);
    if (typeof callback === "function") {
      // 处理自身
      callback(current);
    }
  };

  /**
   * Post-order traversal of the whole tree.
   *
   * @public
   * @param {Function} callback Callback which will be called for each traversed node
   */
  exports.BinaryTree.prototype.postorder = function(callback) {
    return this._postorder(this._root, callback);
  };

  /**
   * Pre-order traversal of the tree from given node. 前序遍历
   *
   * 对于树中的任意节点，先打印它自身，然后打印左子树，最后打印右子树
   * @private
   * @param {Node}
   * @param {Function}
   */
  exports.BinaryTree.prototype._preorder = function(current, callback) {
    if (!current) {
      return;
    }

    if (typeof callback === "function") {
      // 先处理自身
      callback(current);
    }

    // 再分别处理左子树，右子树
    this._preorder(current._left, callback);
    this._postorder(current._right, callback);
  };

  /**
   * Pre-order traversal of the whole tree. 前序遍历
   *
   * @public
   * @param {Function} callback Callback which will be called for each traversed node.
   */
  exports.BinaryTree.prototype.preorder = function(callback) {
    return this._postorder(this._root, callback);
  };

  /**
   * Finds a node by its value
   * Average time complexity: O(log N)
   *
   * 我们先取根节点，如果它等于我们要查找的数据，那就返回。
   * 如果要查找的数据比根节点的值小，那就在左子树中递归查找；
   * 如果要查找的数据比根节点的值大，那就在右子树中递归查找。
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
  exports.BinaryTree.prototype._find = function(value, current) {
    if (!current) {
      return null;
    }

    if (current.value === value) {
      return current;
    }

    if (current.value > value) {
      return this._find(value, current._left);
    }

    if (current.value < value) {
      return this._find(value, current._right);
    }
  };

  /**
   * Replace given child with new one, for given parent
   *
   * @private
   * @param {Node} parent Parent node
   * @param {Node} oldChild child to be replaced
   * @param {Node} newChild child replacement
   */
  exports.BinaryTree.prototype._replaceChild = function(
    parent,
    oldChild,
    newChild
  ) {
    if (!parent) {
      this._root = newChild;
      if (this._root !== null) {
        this._root._parent = null;
      }
    } else {
      if (parent._left === oldChild) {
        parent._left = newChild;
      } else {
        parent._right = newChild;
      }
      if (newChild) {
        newChild._parent = parent;
      }
    }
  };

  /**
   * Remove node from the tree.
   * Average runtime complexity O(log N).
   *
   * 删除一个节点需要分三种情况来处理
   *
   * @public
   * @param {Node} node to be removed
   * @returns {Boolean} True/false depending on whether the given node is removed
   */
  exports.BinaryTree.prototype.remove = function(node) {
    if (!node) {
      return false;
    }

    if (node._left && node._right) {
      var min = this._findMin(node._right);
      var temp = node.value;
      node.value = min.value;
      min.value = temp;
      return this.remove(min);
    } else {
      if (node._left) {
        this._replaceChild(node._parent, node, node._left);
      } else if (node._right) {
        this._replaceChild(node._parent, node, node._right);
      } else {
        this._replaceChild(node._parent, node, null);
      }
      return true;
    }
  };

  /**
   * Finds the node with minimum value in the whole tree.
   * 找到最小的节点 遍历左子树
   *
   *
   * @public
   */
  exports.BinaryTree.prototype.findMin = function() {
    return this._findMin(this._root);
  };

  /**
   * Finds the node with minimum value in given sub-tree.
   *
   * @private
   * @param {Node} node Root of the sub-tree
   * @param {Number|String} current Current minimum value of the sub-tree
   * @returns {Node} Node with the minimum value in the sub-tree
   */
  exports.BinaryTree.prototype._findMin = function(node, current) {
    current = current || {
      value: Infinity
    };

    if (!node) {
      return current;
    }

    if (current.value > node.value) {
      current = node;
    }
    return this._findMin(node._left, current);
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
   * Finds the node with maximum value in given sub-tree.
   *
   * @private
   * @param {Node} node Root of the sub-tree.
   * @param {Number|String} current Current maximum value of the sub-tree.
   * @returns {Node} Node with the maximux value in the sub-tree.
   */
  exports.BinaryTree.prototype._findMax = function(node, current) {
    current = current || { value: -Infinity };

    if (!node) {
      return current;
    }

    if (current.value < node.value) {
      current = node;
    }
    return this._findMax(node._right, current);
  };

  /**
   * Checks if a given node is balanced.
   *
   * @private
   * @param {Node} current Node to have balance checked.
   * @returns {Boolean}
   */
  exports.BinaryTree.prototype._isBalanced = function(current) {
    if (!current) {
      return true;
    }

    return (
      this._isBalanced(current._left) &&
      this._isBalanced(current._right) &&
      Math.abs(
        this._getHeight(current._left) - this._getHeight(current._right)
      ) <= 1
    );
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
   * 查找二叉树的深度
   *
   * @public
   * @returns {Number} the longest path in th BST.
   */
  exports.BinaryTree.prototype.getDiameter = function() {
    var getDiameter = function(root) {
      if (!root) {
        return 0;
      }

      var leftHeight = this._getHeight(root._left);
      var rightHeight = this._getHeight(root._right);
      var path = leftHeight + rightHeight + 1;
      return Math.max(path, getDiameter(root._left), getDiameter(root._right));
    }.bind(this);

    return getDiameter(this._root);
  };

  /**
   * Returns the height of the tree.
   * 查找二叉树的高度
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

    return (
      1 + Math.max(this._getHeight(node._left), this._getHeight(node._right))
    );
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
  ) {
    return this._lowestCommonAncestor(firstNode, secondNode, this._root);
  };

  /**
   * Obtains the lowest common ancestor for the given nodes.
   *
   * @private
   * @param {Node} firstNode First node to be considered when checking
   * for ancestor.
   * @param {Node} secondNode Second node to be considered when checking
   * for ancestor.
   * @param {Node} current Current node.
   */
  exports.BinaryTree.prototype._lowestCommonAncestor = function(
    firstNode,
    secondNode,
    current
  ) {
    var firstNodeInLeft = this._existsInSubtree(firstNode, current._left);
    var secondNodeInLeft = this._existsInSubtree(secondNode, current._left);
    var firstNodeInRight = this._existsInSubtree(firstNode, current._right);
    var secondNodeInRight = this._existsInSubtree(secondNode, current._right);

    if (
      (firstNodeInLeft && secondNodeInRight) ||
      (firstNodeInRight && secondNodeInLeft)
    ) {
      return current;
    }

    if (secondNodeInLeft && firstNodeInLeft) {
      return this._lowestCommonAncestor(firstNode, secondNode, current._left);
    }

    if (secondNodeInRight && secondNodeInLeft) {
      return this._lowestCommonAncestor(firstNode, secondNode, current._right);
    }

    return null;
  };

  /**
   * Checks if a given node exists in a subtree.
   * 检查节点是否在子树中存在
   *
   * @private
   * @param {Node} node Node to check for.
   * @param {Node} root Root node of a given subtree.
   */
  exports.BinaryTree.prototype._existsInSubtree = function(node, root) {
    if (!root) {
      return false;
    }

    if (node === root.value) {
      return true;
    }

    return (
      this._existsInSubtree(node, root._left) ||
      this._existsInSubtree(node, root._right)
    );
  };
})(typeof window === "undefined" ? module.exports : window);
