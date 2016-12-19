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
    //If the value does not exist in the tree already...
    if (value !== this.value) {
      var branch = value > this.value ? 'right' : 'left';
      if (this[branch] === null) {
        this[branch] = BinarySearchTree(value);
      } else {
        this[branch].insert(value);
      }
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
    callback(this.value);
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
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
  },
  balance: function(array) {
    var values = [];

    this.depthFirstLog(function(value) {
      values.push(value);
    });

    values.sort(function(a, b) {
      return a > b;
    });

    this.buildBinaryTree(values);
  },
  buildBinaryTree: function(values) {
    var array = values.slice();
    var orderedValues = [];

    var orderThem = function (array) {
      if (array.length === 1) {
        orderedValues.push(array[0]);
      } else {
        var leftHalf = array.splice(0, Math.floor(array.length / 2));
        orderedValues.push(array.shift());
        orderThem(leftHalf);
        if (array.length > 0) {
          orderThem(array);
        }
      }
    };
    orderThem(array);
    this.value = orderedValues[0];
    this.left = null;
    this.right = null;
    for (var i = 1; i < orderedValues.length; i++) {
      this.insert(orderedValues[i]);
    }
  }
};
