var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.removeChild = function(target, siblings, index) {
  if (this.value === target) {
    siblings.splice(index, 1);
    return true;
  }
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].removeChild(target, this.children, i);
    }
  }
  return false;
};

treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      result = result || this.children[i].contains(target);
    }
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
