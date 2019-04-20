/**
 * 基于链表实现的队列
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class QueueBasedOnLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    if (this.head == null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (this.head != null) {
      const value = this.head.element;
      this.head = this.head.next;
      return value;
    } else {
      return -1;
    }
  }
}

// Test
const newQueue = new QueueBasedOnLinkedList();
// Insert element
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
// Get element
let res = 0;
console.log("----获取dequeue元素----");
while (res !== -1) {
  res = newQueue.dequeue();
  console.log(res);
}
