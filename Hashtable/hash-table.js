/**
 * 散列表
 *
 * 一个关联数组(associative array),
 * 可以通过键(字符串和数字)映射到表中的值。
 *
 * @example
 * const hash = require("path-to-module/hash-table");
 * const hashTable = new hash.Hashtable();
 *
 * hashTable.put(10, 'value');
 * hashTable.put('key', 10);
 * console.log(hashTable.get(10)); // 'value'
 * console.log(hashTable.get('key')); // 10
 *
 * hashTable.remove(10);
 * hashTable.remove('key');
 *
 * console.log(hashTable.get(10)); // undefined
 * console.log(hashTable.get('key')); // undefined
 */

(function(exports) {
  /**
   * 构造一个Node 在hash-table中保存数据和以及前一个或下一个的nodes
   *
   * @public
   * @constructor
   * @param { Number|String } key 参数是node的键
   * @param { Number|String } data 参数是要存储在hash table中的数据
   */
  exports.Node = function(key, data) {
    this.key = key;
    this.data = data;
    this.next = undefined;
    this.prev = undefined;
  };

  /**
   * 构造一个Hash Table
   *
   * @public
   * @constructor
   */
  exports.Hashtable = function() {
    this.buckets = [];
    // buckets的数量越大，产生冲突的可能性越小
    this.maxBucketCount = 100;
  };

  /**
   * 用于hash键 的简单非加密hash，用来确定在bucket中放入值的时间。
   *Java的 32bitint 哈希的javascript实现。

   * @public
   * @method
   * @param {Number|String} 参数val 是key用来生成hash值。
   */
  exports.Hashtable.prototype.hashCode = function(val) {
    let i;
    let hashCode = 0;
    let character;
    // 如果要hash的值已经是一个整数，直接返回
    if (val.length === 0 || val.length === undefined) {
      return val;
    }
    // do some logical here
    for (i = 0; i < val.length; i++) {
      character = val.charCodeAt(i);
      hashCode = (hashCode << 5) - hashCode + character;
      hashCode = hashCode & hashCode;
    }

    return hashCode;
  };

  /**
   * 基于hash的键值将数据放入table中
   *
   * @method
   * @param {Number|String} 参数key 表示数据data的Key
   * @param {Number|String} 参数Data,表示存储在table中的数据
   */
  exports.Hashtable.prototype.put = function(key, data, hashCode) {
    /*
      使用可选的 hashCode 参数简化冲突测试
      只在测试中使用
    */
    if (hashCode === undefined) {
      // 典型用法
      hashCode = this.hashCode(key);
    } else if (hashCode.length > 0) {
      // 传递的是字符串哈希，转换为基于int的哈希。
      hashCode = this.hashCode(hashCode);
    }

    // 调整hash 来适应buckets
    // console.log("Before Hash to buckets: ", hashCode);
    hashCode = hashCode % this.maxBucketCount;
    // console.log("Adjust Hash to buckets: ", hashCode);
    var newNode = new exports.Node(key, data);

    // 如果在给定的hash/index 中没有元素，就放入table中。
    if (this.buckets[hashCode] === undefined) {
      this.buckets[hashCode] = newNode;
      return;
    }

    // 如果给定的hash/index中已经有元素了，覆盖掉。
    if (this.buckets[hashCode].key === key) {
      this.buckets[hashCode].data = data;
      return;
    }

    /* 
      条目存在键的哈希/索引中，但键不同。
      处理冲突
    */
    var first = this.buckets[hashCode];
    while (first.next != undefined) {
      first = first.next;
    }
    first.next = newNode;
    newNode.prev = first;
  };

  /**
   * 根据传入的key值从data中获取值
   *
   * @method
   * @param {Number|String} 参数key 用来表示要获取的数据的Key
   */
  exports.Hashtable.prototype.get = function(key, hashCode) {
    if (hashCode === undefined) {
      hashCode = this.hashCode(key);
    } else if (hashCode.length > 0) {
      hashCode = this.hashCode(hashCode);
    }

    hashCode = hashCode % this.maxBucketCount;
    if (this.buckets[hashCode] === undefined) {
      return undefined;
    } else if (
      this.buckets[hashCode].next === undefined &&
      this.buckets[hashCode].key === key
    ) {
      return this.buckets[hashCode].data;
    } else {
      var first = this.buckets[hashCode];
      while (
        first != undefined &&
        first.next !== undefined &&
        first.key != key
      ) {
        first = first.next;
      }

      if (first.key === key) {
        return first.data;
      } else {
        return undefined;
      }
    }
  };

  /**
   * 根据传入的key值从data中移除值
   *
   * @method
   * @param {Number|String} 参数key 要移除的值的Key
   */
  exports.Hashtable.prototype.remove = function(key, hashCode) {
    if (hashCode === undefined) {
      hashCode = this.hashCode(key);
    } else if (hashCode.length > 0) {
      hashCode = this.hashCode(hashCode);
    }
    hashCode = hashCode % this.maxBucketCount;
    if (this.buckets[hashCode] === undefined) {
      return undefined;
    } else if (this.buckets[hashCode].next === undefined) {
      this.buckets[hashCode] = undefined;
    } else {
      var first = this.buckets[hashCode];
      while (
        first != undefined &&
        first.next != undefined &&
        first.key != key
      ) {
        first = first.next;
      }

      var removedValue = first.data;
      // Removing (B)
      // (B) 只有条目在bucket中
      if (first.prev === undefined && first.next === undefined) {
        first = undefined;
        return removedValue;
      }

      // (B) - A - C: 在bucket中开始的link
      if (first.prev === undefined && first.next != undefined) {
        first.data = first.next.data;
        first.key = first.next.key;
        if (first.next.next != undefined) {
          first.next = first.next.next;
        } else {
          first.next = undefined;
        }
        return removedValue;
      }

      // A - (B) : 在bucket中结束的link
      if (first.prev != undefined && first.next === undefined) {
        first.prev.next = undefined;
        first = undefined;
        return removedValue;
      }

      // A - (B) - C : 在bucket中间的link
      if (first.prev != undefined && first.next != undefined) {
        first.prev.next = first.next;
        first.next.prev = first.prev;
        first = undefined;
        return removedValue;
      }
    }
  };
})(typeof window === "undefined" ? module.exports : window);
