const stack = require("./StackBasedOnLinkedList");

class SampleBrowser {
  constructor() {
    this.normalStack = new stack.CreatedStack();
    this.backStack = new stack.CreatedStack();
  }

  // 正常浏览页面
  pushNormal(name) {
    this.normalStack.push(name);
    this.backStack.clear();
  }

  back() {
    const value = this.normalStack.pop();
    if (value != -1) {
      this.backStack.push(value);
      this.displayAllStack();
    } else {
      console.log("无法后退");
    }
  }

  front() {
    const value = this.backStack.pop();
    if (value != -1) {
      this.normalStack.push(value);
      this.displayAllStack();
    } else {
      console.log("无法前进");
    }
  }

  displayAllStack() {
    console.log("---后退页面---");
    this.backStack.display();
    console.log("---浏览页面---");
    this.normalStack.display();
  }
}

// Test
const browser = new SampleBrowser();
browser.pushNormal("www.google.com");
browser.pushNormal("www.baidu.com");
browser.pushNormal("www.github.com");

// backwards
browser.back();
browser.back();
browser.back();
browser.pushNormal("www.163.com");
