var BinarySearchTree = function(value, left, right) {
  var node = Object.create(searchTreeMethods);
  node.left = left || null;
  node.right = right || null;
  node.value = value;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var searchTreeMethods = {
  insert: function(value) {
    var branch;
    if (value > this.value) {
      branch = 'right';
    } else {
      branch = 'left';
    }
    if (this[branch] === null) {
      this[branch] = BinarySearchTree(value);
    } else {
      this[branch].insert(value);
    }
  },
  contains: function(value) {
    if (this.value === value) {
      return true;
    }
    //Recursively call 'contains' with the node at position left or position right
    if (value > this.value) {
      branch = 'right';
    } else {
      branch = 'left';
    }
    if (this[branch] !== null) {
      return this[branch].contains(value);
    }
    return false;
  },
  depthFirstLog: function(callback) {
    var hasLeft = this.left !== null;
    var hasRight = this.right !== null;
    callback(this.value);
    if (hasLeft) {
      this.left.depthFirstLog(callback);
    }
    if (hasRight) {
      this.right.depthFirstLog(callback);
    }
  }
};
