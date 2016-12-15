var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else if (list.head.next === null) {
      list.head.next = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target, node) {
    node = node || list.head;
    if (node.value === target) {
      return true;
    }
    if (node.next === null) {
      return false;
    }
    return list.contains(target, node.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 
First time we add a value, .value for head and taeil points to it
Secon time we add a valeu, head .next needs to point to it and tail.value needs to point to it
Every other time, we just have to update tail.value

 */
