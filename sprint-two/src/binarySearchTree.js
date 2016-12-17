var BinarySearchTree = function(value) {
  var node = Object.create(searchTreeMethods);
  node.left = null;
  node.right = null;
  node.value = value;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var searchTreeMethods = {
  insert: function(value) {
    var branch = value > this.value ? 'right' : 'left';
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
    var branch = value > this.value ? 'right' : 'left';
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
  },
  breadthFirstLog: function(callback, first) {
    var hasLeft = this.left !== null;
    var hasRight = this.right !== null;
    if (first === undefined) {
      first = true;
    }
    if (first) {
      callback(this.value);
    }
    if (hasLeft) {
      callback(this.left.value);
    }
    if (hasRight) {
      callback(this.right.value);
    } 
    if (hasLeft) {
      this.left.breadthFirstLog(callback, false);
    }
    if (hasRight) {
      this.right.breadthFirstLog(callback, false);
    }  
  }
};
