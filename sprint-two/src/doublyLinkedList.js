var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    newNode.prev = list.tail;
    list.tail = newNode;
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
    } else {
      list.head.prev = newNode;
    }
    newNode.next = list.head;
    list.head = newNode;
  };

  list.removeTail = function() {
    var temp = list.tail.value;
    list.tail = list.tail.prev;
    if (list.tail !== null) {
      list.tail.next = null;
    }
    return temp;
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    if (list.head !== null) {
      list.head.prev = null;
    }
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
