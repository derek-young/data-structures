

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (index in this._storage) {
    this._storage[index][k] = v;
  } else {
    this._storage[index] = {orig: v};
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (k in this._storage[index]) {
    return this._storage[index][k];
  }
  return this._storage[index].orig;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (k in this._storage[index]) {
    delete this._storage[index][k];
  }
  delete this._storage[index].orig;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


