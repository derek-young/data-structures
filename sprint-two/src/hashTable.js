

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //If count is equal to 75% or more of limit, rehash
  if (this._size >= this._limit * 0.75) {
    this._limit *= 2;
    this.rehash();
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  this._size++;
  bucket.push([k, v]);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var value;
  _.each(bucket, function(item) {
    if (item[0] === k) {
      value = item[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k) {
  //If count less than or equal to 25% of limit, rehash
  if (this._limit > 8 && this._size <= this._limit * 0.25) {
    this._limit /= 2;
    this.rehash();
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._size--;
    }
  }

  HashTable.prototype.rehash = function() {
    var pairs = [];
    this._storage.each(function(bucket, key, storage) {
      if (bucket !== undefined) {
        pairs = pairs.concat(bucket);
      }
    });
    this._size = 0;
    this._storage = LimitedArray(this._limit);
    for (var i = 0; i < pairs.length; i++) {
      this.insert(pairs[i][0], pairs[i][1]);
    }
  };
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
