

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
  _.each(bucket, function(item) {
    if (item[0] === k) {
      bucket.splice(item, 1);
      this._size--;
    }
  });

  HashTable.prototype.rehash = function() {
    var pairs = [];
    console.log(this);
    this.each(function(bucket) {
      pairs = pairs.concat(bucket, key, storage);
      storage.splice(key, 1);
    });
    _.each(pairs, function(pair) {
      this.insert.apply(this, pair);
    });
  };
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


