const hash = require("./hash-table");

const hashTable = new hash.Hashtable();

hashTable.put(10, "value");
hashTable.put("key", 10);

console.log(hashTable.get(10));
console.log(hashTable.get("key"));

hashTable.remove(10);
hashTable.remove("key");

console.log(hashTable.get(10));
console.log(hashTable.get("key"));
