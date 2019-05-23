var BST = require("./binary-search-tree");
var bst = new BST.BinaryTree();

bst.insert(2000);
bst.insert(1989);
bst.insert(1991);
bst.insert(2001);
bst.insert(1996);

var node = bst.find(1989);
console.log(node.value); // 1989
