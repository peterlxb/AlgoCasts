(function(exports) {
  /**
   * 链表结点
   *
   * @public
   * @constructor
   * @param {Object} 结点中的数据
   */
  exports.Node = function(data) {
    /**
     * 结点中的数据
     * @param {Object}
     */
    this.data = data;
    /**
     * 下一个结点
     * @param {Object}
     */
    this.next = null;
    /**
     * 上一个结点
     * @param {Object}
     */
    this.prev = null;
  };

  /**
   * Linked list 链表
   *
   * @public
   * @constructor
   */
  exports.linkedList = function() {
    this.first = null;
    this.last = null;
  };

  /**
   *  将数据添加到 linked list最后
   *
   * @public
   * @method
   * @param {Object} data 要添加的数据
   */
  exports.linkedList.prototype.push = function(data) {
    var node = new exports.Node(data);
    // 处理边界问题，链表为空和非空情况下的处理
    if (this.first === null) {
      this.first = this.last = node;
    } else {
      // 向链表尾部追加数据，新的结点作为尾结点，它的prev就是原来的尾节点；原先的尾节点的next 变为新node
      var temp = this.last;
      this.last = node;
      node.prev = temp;
      node.next = node;
    }
  };

  /**
   * 将数据添加到 linked list 开始位置
   *
   * @public
   * @method
   * @param {Object} 要添加地数据
   */
  exports.linkedList.prototype.unshift = function(data) {
    var node = new exports.Node(data);
    if (this.first === null) {
      this.first = this.last = node;
    } else {
      var temp = this.first;
      this.first = node;
      node.next = temp;
      temp.prev = node;
    }
  };

  /**
   * 按顺序遍历 linked list
   *
   * @public
   * @method
   * @param {Function} 在每个结点上执行地回调函数
   */
  exports.linkedList.prototype.inorder = function(cb) {
    var temp = this.first;
    while (temp) {
      cb(temp);
      temp = temp.next;
    }
  };

  /**
   * 从 linked list 中删除数据
   *
   * @public
   * @method
   * @param {Object} 要删除地数据
   * @return {Boolean} 数据被删除后返回 true
   */
  exports.linkedList.prototype.remove = function(data) {
    if (this.first === null) {
      return false;
    }
    var temp = this.first;
    var next;
    var prev;
    while (temp) {
      if (temp.data === data) {
        next = temp.next;
        prev = temp.prev;
        if (next) {
          next.prev = prev;
        }
        if (prev) {
          prev.next = next;
        }
        if (temp === this.first) {
          this.first = next;
        }
        if (temp === this.last) {
          this.last = prev;
        }
        return true;
      }
      temp = temp.next;
    }
    return false;
  };

  /**
   * 检查 linked list 是否有循环
   *
   * @public
   * @method
   * @return {Boolean} 返回true 如果 linked list 含有循环
   */
  exports.linkedList.prototype.hasCycle = function() {
    var fast = this.first;
    var slow = this.last;
    while (true) {
      if (fast === null) {
        return false;
      }
      fast = fast.next;
      if (fast === null) {
        return false;
      }
      fast = fast.next;
      slow = slow.next;
      if (fast === slow) {
        return true;
      }
    }
  };

  /**
   * 返回linked list中最后一个结点
   *
   * @public
   * @method
   * @return {Node} 最后一个结点
   */
  exports.linkedList.prototype.pop = function() {
    if (this.last === null) {
      return null;
    }
    var temp = this.last;
    this.last = this.last.prev;
    return temp;
  };

  /**
   * 返回 linked list 地第一个结点
   *
   * @public
   * @method
   * @return {Node} 第一个结点
   */
  exports.linkedList.prototype.shift = function() {
    if (this.first === null) {
      return null;
    }
    var temp = this.first;
    this.first = this.first.next;
    return temp;
  };

  /**
   * 递归地反转linked list
   *
   * @public
   * @method
   */
  exports.linkedList.prototype.recursiveReverse = function() {
    function inverse(current, next) {
      if (!next) {
        return;
      }
      inverse(next, next.next);
      next.next = current;
    }
    if (!this.first) {
      return;
    }
    inverse(this.first, this.first.next);
    this.first.next = null;
    var temp = this.first;
    this.first = this.last;
    this.last = temp;
  };

  /**
   * 迭代地反转 linked list
   *
   * @public
   * @method
   */
  exports.linkedList.prototype.reverse = function() {
    if (!this.first || !this.first.next) {
      return;
    }
    var current = this.first;
    var next;
    do {
      next = current.next;
      current.next = current.prev;
      current.prev = next;
      current = next;
    } while (next);
    var tmp = this.first;
    this.first = this.last;
    this.last = tmp;
  };
})(typeof window === "undefined" ? module.exports : window);
