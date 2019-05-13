(function(exports) {
  /**
   * 链表结点
   *
   * @public
   * @constructor
   * @param {Object} 结点中的数据
   * @双向链表示例
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
   * Linked list 双向链表 初始化头结点和 尾结点
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
      // 向链表尾部追加数据，新的结点作为尾结点，
      // 它的prev就是原来的尾节点；原先的尾节点的next 变为新node
      var temp = this.last;
      this.last = node;
      node.prev = temp;
      temp.next = node;
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
        // 两个结点的边界情况
        if (next) {
          next.prev = prev;
        }
        if (prev) {
          prev.next = next;
        }
        // 处理头结点的边界情况
        if (temp === this.first) {
          this.first = next;
        }
        // 处理尾结点的边界情况
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
   * 检查 linkedList 是否有环
   *
   * @public
   * @method
   * @return {Boolean} 返回true 如果 linkedList 有环
   */
  exports.linkedList.prototype.hasCycle = function() {
    // 思路就是用两个指针，一个跑的快，一个跑的慢，如果有环的话，跑的快的一定会追上慢的
    // 每次循环，fast跑两次，slow 跑一次
    var fast = this.first;
    var slow = this.first;
    while (true) {
      // 快指针为空
      if (fast === null) {
        return false;
      }
      // 快指针的第二个结点为空
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
    // 边界: 链表结点少于 1
    if (!this.first || !this.first.next) {
      return;
    }
    var current = this.first;
    var next;
    do {
      next = current.next;
      // 反转链表 当前结点 next 指针指向 当前结点 prev结点，
      // 当前结点 prev 指向当前结点 下一个结点
      current.next = current.prev;
      current.prev = next;
      current = next;
    } while (next);
    // 头结点 尾结点变换
    var tmp = this.first;
    this.first = this.last;
    this.last = tmp;
  };
})(typeof window === "undefined" ? module.exports : window);
