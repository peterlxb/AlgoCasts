const Heap = require("./heap").Heap;

var heap = new Heap(function(a, b) {
  return a.birthyear - b.birthyear;
});

heap.add({
  name: "John",
  birthyear: 1981
});
heap.add({
  name: "Pavlo",
  birthyear: 2000
});
heap.add({
  name: "Garry",
  birthyear: 1989
});
heap.add({
  name: "Derek",
  birthyear: 1990
});
heap.add({
  name: "Ivan",
  birthyear: 1966
});

console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
